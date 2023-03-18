export interface personal{
    fullname:string,
    nickname:string,
    role:string,
    about:string,
    address:string,
    kodepos:string,kecamatan:string,kabupaten:string, negara:string,
    employment:employment[],
    education:education,
    skills:string[],
    languages:bahasa[],
    links:string[]
}
export interface employment{
    role:string,
    company:string,
    city:string,
    start:string,
    end:string,
    jobdesk:string[]
}
export interface education{
    major:string,
    university:string,
    city:string,
    duration:string
}
export interface bahasa{
    lang:string,
    level:string
}

export interface project{
    id:number,
    name:string,
    liveLink:string,
    githubLink:string,
    description:string,
    image:string
}

