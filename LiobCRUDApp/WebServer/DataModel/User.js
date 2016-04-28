/**
 * Created by Liukeyi on 2016/4/27.
 */
function User(username, pwd, profession, id) {
    this.username = username || '';
    this.pwd = pwd || '';
    this.profession = profession || '';
    this.id = id || '';
}

module.exports = User;