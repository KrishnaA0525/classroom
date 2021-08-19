export interface User {
    id: string,
    emailAddress: string,
    name: Name,
    permissions: Permission[],
    photoUrl: string,
    verifiedTeacher: boolean
}

interface Name {
    familyName: string,
    givenName: string,
    fullName: string
}

interface Permission {
    permission: string
}