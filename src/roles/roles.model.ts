import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({ example: "1", description: "role ID" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "user role" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  value: string;

  @ApiProperty({ example: "Can be like god", description: "role description" })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string;
}