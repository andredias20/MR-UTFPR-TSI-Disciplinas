import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {

    getParkingLot(code: string): Promise<ParkingLot> {
        return Promise.resolve(new ParkingLot("shopping", 5, 8, 22));
    }

}