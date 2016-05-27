# Intro
Twelve Factor App is a methodology to build SaaS projects. In this post I'm going to give a briefer explanation about this than its [[ http://12factor.net/ | original website ]]. I think this subject is really important for everyone in here in order to better understand what the apps we are used to build must have. But I'm happy because most of the points of this methodology are properly implemented in our SaaS projects. Of course, we always can improve something and this is the idea of this list.

As it own name says it has 12 rules that every SaaS project must follow and these rules are:

  # Codebase
  # Dependencies
  # Config
  # Backing Services
  # Build, release, run
  # Process
  # Port binding
  # Concurrency
  # Disposability
  # Dev/Prod parity
  # Logs
  # Admin processes

# So, tell me, what do they mean?

### Codebase
 -> This is the version control repository and we should use tools like: Git, ~~svn~~, ~~mercurial~~.

### Dependencies
 -> Packaging system, such as: npm, ~~bower~~, composer;
 -> Use vendor;
 -> Set up all the project dependencies within the project.

### Config
 -> Env file, where you set different environment variables of your project. The env file might be different to your dev, staging, testing and production environments.

### Backing services
 -> Any service the app consumes, such as: Datastore {Mysql or CouchDB}, Queue {RabbitMQ}, SMTP {POSTFIX}, Caching {Memcached or Redis};
 -> Also any other third party system such as: new relic, loggly, amazon s3, twitter, googles maps;
 -> To the app they all are the same, it means if you change the smtp service, what should be changed is only the handler of this service and not your app implementation to adapt this new service.

### Build, release, run
 -> Build stage: Converts the codebase into an executable bundle;
 -> Release stage: Takes the bundle and combines it with the environment configuration;
 -> Run stage: Runtime, runs the app;
{F16281}
 -> In this way, it is impossible to change a released file once it must come from the build stage first;
 -> Use deployment tools which will manage the releases, so if you want to rollback any release, just do it;
 -> Every release must have a unique ID. An already created release can't be changed, any other change must create a new release;
 -> Run stage must not be complicated, only few moves, leave the hard work to the build stage.

### Process
 -> Twelve factor processes are stateless and share nothing (each node is independent and self-sufficient);
 -> Assets must be compiled in build stage;
 -> Never assume anything cached will be available in the future or even a soon future, you should know what you want to keep and what you can recover easily;
 -> Session state tools are a good choice, such as: Memcached or Redis.

### Port binding
 -> The apps are usually executed through a webserver, for example, for PHP you use Apache HTTPD or Nginx and with ~~Java~~ you use TomCat;
 -> With twelve factor app, you set your webserver as a dependency of your project, then in this case, the HTTP would be exported and bound to a port;
 -> In development env, you would have http://localholst:5000 and in a deployment env, you would have a routing layer to handle it.

### Concurrency
 -> Use jobs to decrease the concurrency of the requests and services across the server.

### Disposability
 -> Fast startup and graceful shutdown;
 -> Processes can be started at any time;
 -> Also a graceful shutdown can't be a problem, when the process is back, all the jobs and services must be in sync again.

### Dev/Prod parity
|  | Traditional | Twelve Factor App |
| --- | --- | --- |
| Time between deploys | Weeks | Hours
| Code authors vs code deployers | Different people | Same people
| Dev vs Production Environment | Divergent | Similar

 -> Use vm's or containers.

### Logs
 -> The app needs a log generator;
 -> Logs are not just used to log errors, but also to test emails, test performance, test connections, etc...;
 -> You need more advanced tools to handle it for you, such as: [[ http://www.fluentd.org/ | Fluentd ]], where you can set it to send you an email when an important log is created;
 -> Then if you reach a massive log data, it would be really hard to read or even take a tiny information of them, you could use other tools to manage massive data for you such as: Hadoop/Hive or Splunk. Then you can have a better look to their data.

### Admin Processes
 -> This is just the commands we are used to run in our apps, such as:
`php artisan migrate`
`npm install`
`composer update`
 -> And these commands must be available to use in any kind of environment of your app, because they are supposed to be running with same environment configurations.


This is just a really brief summary of what I could understand of Twelve Factor App. If you think you need more information, please feel free to access their website.

Thanks.
