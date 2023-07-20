import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface BrandCreationAttrs {
  name: string;
}

@Table({ tableName: 'brand' })
export class Brand extends Model<Brand, BrandCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
