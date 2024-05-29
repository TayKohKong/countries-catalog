const Card = ({country, onItemClick}) => {
  return (
    <div className="mt-4 py-4 px-4 bg-whit w-80 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
      <img
        className="rounded-t-lg h-48 w-full"
        src={country.flags.png}
        alt="Country flag"
      />
      <div className="px-6 py-4">
        <span onClick={() => onItemClick && onItemClick(country)}  className="font-bold text-xl mb-2 hover:cursor-pointer">{country.name}</span>
          <p>
          2 character Country Code : <span>{country.cca2}</span>
          </p>
          <p>
          3 character Country Code : <span>{country.cca3}</span>
          </p>
          <p>
          Native Country Name : <span>{country.nativeName}</span>
          </p>
          <p>
          Alternative Country Name : <span>{country.altSpelling}</span>
          </p>
          <p>
          Country Calling Code : <span>{country.idd}</span>
          </p>
      </div>
    </div>
  );
};

export default Card;
