import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface TypeCreationAttrs {
  name: string;
}

@Table({ tableName: 'type' })
export class Type extends Model<Type, TypeCreationAttrs> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
