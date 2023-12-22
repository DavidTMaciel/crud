import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class CarModel {
    @PrimaryGeneratedColumn()
    public ID: number | null

    @Column({ type: 'varchar', length: '255' })
    public model: string

    @Column()
    public year: number

    @Column({ type: 'varchar', length: '255' })
    public brand: string

    @Column({ type: 'varchar', length: '100' })
    public color: string

    @Column({ type: 'timestamp', nullable: true, update: false, name: 'created_at' })
    public createdAt: Date

    @Column({ type: 'timestamp', nullable: true, name: 'updated_at' })
    public updatedAt: Date

    constructor(ID: number | null, model: string, year: number, brand: string, color: string, createdAt: Date, updatedAt: Date) {
        this.ID = ID
        this.model = model
        this.year = year
        this.brand = brand
        this.color = color
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
}

export { CarModel }