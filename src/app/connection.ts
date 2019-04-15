export class Connection {
    
    constructor(
    public connectionName: string,
    public description: string,
    public type: string,
    public cms: string,
    public repositoryUrl: string,
    public password: string,
    public contentStore: string,
    public loginID: string,
    public url: string,
    public siteName: string,
  ) {  }

}
