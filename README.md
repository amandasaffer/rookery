# The Rookery
The Rookery's website and blog built with Jekyll, Susy, and SCSS.  
  
  
  
### Installing Jekyll

First, make sure you have [RubyGems][ruby-gems] installed. Then run `gem install jekyll` in your Terminal.  
  
  
  
  
### Running a server

You can just run `jekyll serve` in the directory to run a server, but in order to test the site on other devices with a local IP address, you'll need to run `jekyll serve --host 0.0.0.0` instead.

[ruby-gems]: https://rubygems.org/pages/download

  
  
### Keeping `gh-pages` branch up to date with `master`
After you push new commits to the master branch, follow the below rebase strategy to keep the `gh-pages` branch up to date. Our actual site is served from the `gh-pages` branch, not the `master` branch.

```
git checkout gh-pages       // go to the gh-pages branch
git rebase master           // bring gh-pages up to date with master
git push origin gh-pages    // commit the changes
git checkout master         // return to the master branch
```
