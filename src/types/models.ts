export interface UserModel{
    firstname:string;
    lastname:string;
    image:string;
    country:string;
}

export interface IncommingModel{
    results:Array<{
        name:{
            first:string;
            last:string;
        },
        location:{
            country:string;
        },
        picture:{
            medium:string;
        }
    }>
}