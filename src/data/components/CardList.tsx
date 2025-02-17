import useData from "../useData";

const CardList = () => {
  const { data, loading } = useData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 gap-y-10 mt-10 content-center">
      {loading && <h1 className="mt-20">Loading...</h1>}
      {data?.map((data) => (
        <div
          key={data.id}
          className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl hover:scale-110 transition-transform duration-100"
        >
          <img
            className="place-self-center h-40 w-30 object-contain"
            width={64}
            src={data.image}
          />
          <div className="p-4">
            <div className="font-bold text-xl mb-2 line-clamp-2">
              {data.title}
            </div>
            <p className="line-clamp-3 text-start">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
