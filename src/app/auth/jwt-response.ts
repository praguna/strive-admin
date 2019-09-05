export interface JwtResponse{
    admin:{
        email :string,
        password : string
    },
    token : string,
    expires_in : Number
}