<h1 align="center">
    Project Showcase Server 
</h1>
<p align="center">Backend for Project Showcase (a platform for people to showcase their projects and build a project-centric profile)</p>

<a id="tech-stack"></a>
## ⚙️ Tech Stack

* Express.js
* PostgreSQL
* Objection.js
* Knex.js

<a id="setup-run"></a>
## 🔨 Setup and Run

<a id="setup-repo"></a>
### Setup local repo
Let's setup the server on your local machine.

### 0. Prerequisites
* Make sure you have [Node.js](http://nodejs.org) installed on your machine.

### 1. Fork repo
Fork this repo to your GitHub account

### 2. Clone repo
Clone the forked repo to your local machine
```bash
git clone https://github.com/<YOUR-GITHUB-USERNAME>/project_showcase_server.git
```
Navigate to project directory
```bash
cd project_showcase_server
```

### 3. Install Dependencies
```bash
npm install
```

<a id="setup-remote"></a>
### 4. 📡 Setup remote

0. You will have to set up remote repositories for getting latest changes from original repository
1. Specify a new remote upstream repository that will be synced with the fork using follwoing command :
 ```bash
$ git remote add upstream https://github.com/vighnesh192/project_showcase_server.git
```

2. Verify the new upstream repository you've specified for your fork using `git remote -v`
```console

origin  https://github.com/<your-user-name>/project_showcase_server.git (fetch)
origin  https://github.com/<your-user-name>/project_showcase_server.git (push)
upstream        https://github.com/vighnesh192/project_showcase_server.git (fetch)
upstream        https://github.com/vighnesh192/project_showcase_server.git (push)

```

<a id="setup-database"></a>
### 5. 📡 Setup database
* Make sure you have [PostgreSQL](https://www.postgresql.org/download/) installed on your machine.
* Run Migrations:-
  ```bash
  npm run migrate
  ```
* Seeding:-
  ```bash
  npm run seed
  ```
* Sessions Setup:-
  1. Open psql Shell
  
  2. Select `project_showcase` Database
  
  3. Run this to create `session` table:-  
    ```bash
    psql -f "<PATH-TO-PROJECT-FOLDER>\node_modules\connect-pg-simple\table.sql"  
    ```
### 6. 📌 Setting up .env file :

1. Create a new file `.env` in the root directory.
2. Copy all the default content from the `.env.example` file to the `.env` file.
3. You need to edit this `.env` file to provide your own credentials.

Your application setup is successfully completed!

<a id="run-app"></a>
### 7. Running the app

    ```bash
    # development
    $ npm start
    ```

## ✨ Contributors 

<a href="https://github.com/vighnesh192/project_showcase_server/graphs/contributors"> 
     <img src="https://contrib.rocks/image?repo=vighnesh192/project_showcase_server" />
</a>