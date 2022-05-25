import { Entity, PrimaryKey, Property, } from "@mikro-orm/core";

///Entity is a table
@Entity()
export class Post  {
// each element is a column 
    @PrimaryKey()
    id!: number;
    
    @Property()
    createdAt: Date = new Date();
  
    @Property({ onUpdate: () => new Date() })
    updatedAt: Date = new Date();

}