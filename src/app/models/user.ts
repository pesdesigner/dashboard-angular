export class User {

  constructor(
    public login:               string,
    public id:                  number,
    public node_id:             string,
    public avatar_url:          string,
    public gravatar_id:         string,
    public url:                 string,
    public html_url:            string,
    public followers_url:       string,
    public following_url:       string,
    public gists_url:           string,
    public starred_url:         string,
    public subscriptions_url:   string,
    public organizations_url:   string,
    public repos_url:           string,
    public events_url:          string,
    public received_events_url: string,
    public type:                string,
    public site_admin:          boolean
  ) {}

  get fullName(){
    return `${this.login} ${this.avatar_url}`;
  }
}


/*
public login:               string;
public id:                  number;
public node_id:             string;
public avatar_url:          string;
public gravatar_id:         string;
public url:                 string;
public html_url:            string;
public followers_url:       string;
public following_url:       string;
public gists_url:           string;
public starred_url:         string;
public subscriptions_url:   string;
public organizations_url:   string;
public repos_url:           string;
public events_url:          string;
public received_events_url: string;
public type:                string;
public site_admin:          boolean;

  constructor(
    login:               string,
    id:                  number,
    node_id:             string,
    avatar_url:          string,
    gravatar_id:         string,
    url:                 string,
    html_url:            string,
    followers_url:       string,
    following_url:       string,
    gists_url:           string,
    starred_url:         string,
    subscriptions_url:   string,
    organizations_url:   string,
    repos_url:           string,
    events_url:          string,
    received_events_url: string,
    type:                string,
    site_admin:          boolean
  ) {
    this.login = login;
    this.id = id;
    this.node_id = node_id;
    this.avatar_url = avatar_url;
    this.gravatar_id = gravatar_id;
    this.url = url;
    this.html_url = html_url;
    this.followers_url = followers_url;
    this.following_url = following_url;
    this.gists_url = gists_url;
    this.starred_url = starred_url;
    this.subscriptions_url = subscriptions_url;
    this.organizations_url = organizations_url;
    this.repos_url = repos_url;
    this.events_url = events_url;
    this.received_events_url = received_events_url;
    this.type = type;
    this.site_admin = site_admin;
  }

*/
