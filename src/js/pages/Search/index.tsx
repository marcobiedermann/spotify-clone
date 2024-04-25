import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Albums, Artists, Error, Loader, Playlists } from '../../components';
import { FormData, useSearch } from '../../hooks/search';

function SearchPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultValues = Object.fromEntries(searchParams);
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues,
  });
  const { mutate, data, error, isError, isPending } = useSearch();

  function onSubmit(formData: FormData) {
    const { q } = formData;
    setSearchParams({
      q,
    });
    mutate(formData);
  }

  if (isPending) {
    return <Loader />;
  }

  if (isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      <div>
        <h1>Search</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="q">Search</label>
            <input id="q" type="search" {...register('q')} />
          </div>
        </form>
        {data && (
          <>
            <h3>Tracks</h3>
            {data.tracks && (
              <ul>
                {data.tracks.items.map((track) => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ul>
            )}

            {data.artists && (
              <>
                <h3>Artists</h3>
                <Artists artists={data.artists.items} />
              </>
            )}

            {data.albums && (
              <>
                <h3>Albums</h3>
                <Albums items={data.albums.items} />
              </>
            )}

            {data.playlists && (
              <>
                <h3>Playlists</h3>
                <Playlists items={data.playlists.items} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default SearchPage;
