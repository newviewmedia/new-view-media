# new-view-media
New View Media Jekyll Forestry Build

 
#### Data
/new-view-media/_data
- include any yml/json files here

#### Layouts
/new-view-media/_layouts
- include any page layouts, the default.html will hold all of our includes for a single
 page website

#### Includes
/new-view-media/_includes
- include html snippet includes here, use data from _data files and loop through

### Running Locally

1) initiate the vagrant environment
```
vagrant up
```
2) jump into the vagrant environment
```
vagrant ssh
```
3) once in the vagrant environment, change into the directory below
```
cd /vagrant/new-view-media
```
4) run the bundle installer
```
bundle install
```
5) serve the files on the localhost and open in the browser at localhost:4000/
```
jekyll serve --host 0.0.0.0 --watch
```
