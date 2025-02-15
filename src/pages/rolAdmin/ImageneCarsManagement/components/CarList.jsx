const CarList = ({ cars, onCarSelect }) => {
    return (
      <div className="grid gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            onClick={() => onCarSelect(car)}
            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <h3 className="font-medium">{car.brand} {car.model}</h3>
            <p className="text-sm text-gray-600">Color: {car.color}</p>
            <p className="text-sm text-gray-600">Precio por día: ${car.pricePerDay}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CarList;