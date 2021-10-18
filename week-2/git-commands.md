Checking the git version installed

```
git --version
```

Setting up the username and email
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Initialize an empty repository
```
git init
```

### Adding files to git
Adding a single file
```
git add index.html
```
Adding multiple files [separate each filename by a space] 

```
git add index.html style.css 
```
To add all new files in one go (not always recommended)
```
git add .
```

Making a git commit
```
git commit -m "commit message"
```

Displays the state of the working directory and the staging area
```
git status
```

### Viewing the git history
Default git log
```
git log
```
Less detailed version of the log
```
git log --oneline
```
More detailed version of the log
```
git log -p
```

Add a remote repository to your local one/Connecting your local repo with Github.
```
git remote add origin https://github.com/sebinbenjamin/learn-git-demo.git
```

Pushing the commits in the current branch of your repository to the develop branch of the remote called origin.
```
git push –u origin develop
```

Create a clone, or copy of a remote repository [getting a copy of someone's code to your computer]
```
git clone https://github.com/sebinbenjamin/learn-git-demo.git
```

To see all the remotes added to the local git repository
```
git remote -v
```