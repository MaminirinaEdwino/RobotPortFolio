

export default function DetailsInformation({
  title,
  details,
  icons,
  position,
}) {
  return (
    <article 
    
    className="w-full  space-x-1 flex justify-around m-auto my-auto text-white mb-5">
      <div className="sm:max-w-[400px] w-[45%]  backdrop-blur p-3 border-b-2 border-r-2 border-blue-700">
        {position % 2 == 0 ? (
          <div>
            <h1 className="text-3xl font-bold text-blue-700">{title}</h1> <p>{details}</p>
          </div>
        ) : (
          <div className="text-9xl flex justify-center items-center hover:text-blue-700 transition-all duration-150">{icons}</div>
        )}
      </div>
      <div className="sm:max-w-[400px] w-[45%] backdrop-blur p-3 border-t-2 border-l-2 border-blue-700">
        {position % 2 != 0 ? (
          <div>
            <h1 className="text-3xl font-bold text-blue-700">{title}</h1> <p>{details}</p>
          </div>
        ) : (
            <div className="text-9xl transition-all duration-150 flex justify-center items-center hover:text-blue-700">{icons}</div>
        )}
      </div>
    </article>
  );
}
