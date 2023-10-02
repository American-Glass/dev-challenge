export default class MultiSearchModel<T> {
    constructor(public db: T[]) {}

    public async findAllByName(text: string): Promise<T[]> {
        const result = this.db.reduce((acc: T[], current: T) =>
            Object
                .entries(current as any)
                .find((item: any) => item[1]
                    .toString()
                    .toLowerCase()
                    .includes(text.toLowerCase()))?.length
            ? [...acc, current]
            : acc
            
        , []);
        

        return result;
    }
}