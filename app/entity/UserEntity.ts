export default class User{
    private _userId: string;
    public get userId(): string {
        return this._userId;
    }
    public set userId(value: string) {
        this._userId = value;
    }
    private _userName: string;
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }
    private _userPwd: string;
    public get userPwd(): string {
        return this._userPwd;
    }
    public set userPwd(value: string) {
        this._userPwd = value;
    }
    private _userNick: string;
    public get userNick(): string {
        return this._userNick;
    }
    public set userNick(value: string) {
        this._userNick = value;
    }
    private _userPhone: string;
    public get userPhone(): string {
        return this._userPhone;
    }
    public set userPhone(value: string) {
        this._userPhone = value;
    }
    private _userEmail: string;
    public get userEmail(): string {
        return this._userEmail;
    }
    public set userEmail(value: string) {
        this._userEmail = value;
    }
    private _userBirthday: string;
    public get userBirthday(): string {
        return this._userBirthday;
    }
    public set userBirthday(value: string) {
        this._userBirthday = value;
    }
    private _userAvatar: string;
    public get userAvatar(): string {
        return this._userAvatar;
    }
    public set userAvatar(value: string) {
        this._userAvatar = value;
    }
    constructor(user:any = { }){
        this._userId = user.user_id?user.user_id:(user.userId??'');
        this._userName = user.user_name?user.user_name:(user.userName??'');
        this._userPwd = user.user_pwd?user.user_pwd:(user.userPwd??'');
        this._userNick = user.user_nick?user.user_nick:(user.userNick??'');
        this._userPhone = user.user_phone?user.user_phone:(user.userPhone??'');
        this._userEmail = user.user_email?user.user_email:(user.userEmail??'');
        this._userBirthday = user.user_birthday?user.user_birthday:(user.userBirthday??'');
        this._userAvatar = user.user_avatar?user.user_avatar:(user.userAvatar??'');
    }
    public toString ():any{
        
        return {userId:this.userId,userName:this.userName,userPwd:this.userPwd,userNick:this.userNick,userPhone:this.userPhone,userEmail:this.userEmail,userBirthday:this.userBirthday,userAvatar:this.userAvatar}
	}
}
