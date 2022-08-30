export default function Member({ key, picture, name, role }) {
  return (
    <div
      key={key}
      className="w-12/12 sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/10 2xl:w-2/12 lg:mb-0 mb-12 mt-12 px-4 mx-auto"
    >
      <img
        alt={name}
        src={`img/team/${picture}`}
        className="shadow-lg rounded-full mx-auto w-56 h-56 md:w-48 md:h-48 object-scale-down"
      />
      <div className="p-4 text-center">
        <p className="text-3xl md:text-2xl lg:text-xl font-bold">{name}</p>
        <p className="mt-1 text-lg md:text-md lg:text-sm text-purple-600 uppercase font-semibold">
          {role}
        </p>
      </div>
    </div>
  );
}
