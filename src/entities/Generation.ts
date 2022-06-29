import { v4 as uuidv4 } from 'uuid';
import { ICreateGenerationDTO } from '../useCases/CreateGeneration/CreateGenerationDTO';

export class Generation {
  public _id: string;
  public date: Date;
  public generatePower: number;
  public plantId: string;

  constructor(generationDTO: ICreateGenerationDTO, plantId: string, _id?: string) {
    this._id = _id || uuidv4();
    this.date = generationDTO.date;
    this.generatePower = generationDTO.generatePower;
    this.plantId = plantId;
  }
}
