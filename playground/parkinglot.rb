describe '#numCarsInLot' do
    it "returns 0 when no cars" do
        expect(ParkingLot.new.num_cars) to eq(0)
    end
end

describe '#addCarToLot' do
    it "increments num_cars" do
      p = ParkingLot.new
      p.add_car(Car.new)
        expect(p.num_cars) to eq(1)
    end
end

# create a ParkingLot class

class ParkingLot
  def initialize
    @cars = []
  end

  def add_car(car)
    @cars << car
  end

  def num_cars
    @cars.length
  end
end
