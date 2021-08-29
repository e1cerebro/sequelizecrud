Installation Guide

Install git
https://git-scm.com/download/win

Confirm the installation was completed by typing
``git --version``


Clone the project starter file by running the following command on you command line
git clone https://github.com/e1cerebro/sequelizecrud.git

Install Nodejs by going to this website
https://nodejs.org/en/download/

After installation, type this command to confirm that node was installed
``node -v``

Install the project dependencies by typing

``npm install``

To install the Sequelize CLI:

```npm install -g sequelize-cli```

Install Sequelize

``npm install --save sequelize pg pg-hstore``

Initialize Sequelize

``sequelize init``

Created a user model
sequelize model:create --name User --attributes name:string,age:integer,department:string,role:string,status:string 

Migrate the database
sequelize db:migrate 