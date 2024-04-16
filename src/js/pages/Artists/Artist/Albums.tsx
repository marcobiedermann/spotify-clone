/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useArtistAlbums } from '../../../hooks/artists';
import { Albums, Error, Loader, Section } from '../../../components';

interface FormData {
  include_group: 'album' | 'single';
}

function Discography() {
  const { register, watch } = useForm<FormData>({
    defaultValues: {
      include_group: 'album',
    },
  });
  const include_group = watch('include_group');
  const { pathname } = useLocation();
  const { artistId } = useParams();
  const { data, error, isError, isPending } = useArtistAlbums(artistId!, {
    include_groups: [include_group],
    limit: 9,
  });

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  if (isPending) {
    return <Loader />;
  }

  const { items } = data;

  return (
    <Section>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '1em',
          justifyContent: 'space-between',
        }}
      >
        <h2>Discography</h2>
        <p>
          <Link to={`${pathname}/albums`}>Show all</Link>
        </p>
      </div>
      <form>
        <div>
          <label htmlFor="album">Album</label>
          <input id="album" type="radio" value="album" {...register('include_group')} />
        </div>
        <div>
          <label htmlFor="single">Single</label>
          <input id="single" type="radio" value="single" {...register('include_group')} />
        </div>
      </form>
      <Albums items={items} />
    </Section>
  );
}

export default Discography;
