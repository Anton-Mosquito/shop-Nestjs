import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface DeviceCreationAttrs {
  name: string;
  price: string;
  brandId: string;
  typeId: string;
  info: string;
}

@Table({ tableName: 'device' })
export class Device extends Model<Device, DeviceCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  rating: number;

  @Column({ type: DataType.STRING, allowNull: false })
  img: string;
}
