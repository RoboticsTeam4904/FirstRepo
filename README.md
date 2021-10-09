# FirstRepo
Educational Repo for New Members

Add your name below on a new branch, create a pull request into master, and request Brandon or Daniel as a reviewer. Everything except the pull request + review request should be done via git on the command line.
- Daniel (example)
- Navon
- Alexis



# Useful git and github tips:

To clone a repository, go to the repository on github, click the code button, and copy the link. Then, open a terminal and type the following command:
```git clone [link]```, replacing `[link]` witht the repository link. If the repository contains additional repositories (called submodules), use ```git clone --recursive [link]```. Cloning recursively always works, even for repositories without submodules.

For the examples below, you usually omit the `[]`


To check which branch you are on:
```git branch```


To change branches:
```git checkout [branch name]```


To make a new branch, first checkout the branch that you would like yours to build off of, then:
```git checkout -b [new branch name]```


To add a file:
```git add [file]```


To add all files in the current folder (most common use):
```git add .```


To commit:
```git commit -m "nice commit message here"```


To push:
```git push```


To pull:
```git pull```


To initialize submodules (helpful if you forgot to clone recursively):
```git submodule init```


To update submodules (get the correct branches that correspond to the branch of the repository you are in):
```git submodule update```


To check status:
```git status```


To reset your local branch (trash your changes):
```git reset head --hard``` or ```git reset --hard```


To merge (usually to merge master into your branch):
```git merge [branch to merge into yours (usually master)]```


To view the git log:
```git log```


To view a diff (the difference between your code and the code on another branch):
```git diff [branch name]```


To create a pull request using github.com, first create a new branch and push. Then go to that branch on github and click create pull request.


The above commands have aliases in `zsh`, which is the default shell on new MacBooks (there are more than just these but I usually use these):

```git pull``` is ```gl```

```git push``` is ```gp```

```git commit``` is ```gc```

```git checkout master``` is ```gcm```

```git add``` is ```ga```

```git reset HEAD --hard``` is ```grhh```

```git merge``` is ```gm```

```git status``` is ```gst```

```git checkout``` is ```gco```

```git branch``` is ```gb```
Ethan Was here
