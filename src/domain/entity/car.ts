class CarEntity {
    public ID: number | null
    public model: string
    public year: number
    public brand: string
    public color: string
    public createdAt: Date
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

export { CarEntity }