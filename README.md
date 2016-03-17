## YaCasper

Yet another port of Ghost's default theme [Casper](https://github.com/tryghost/casper) to Jekyll.  
Initially based on [Jasper](https://github.com/biomadeira/jasper), with focus on quick and native deployment using Github Pages.

## Screenshots and [Live Demo](https://mtuner.github.io/YaCasper)
![Screenshots](sh.png?raw=true "Screenshots")


## Features
* **All the features of Casper**: responsible layout, sidebar, tags, authors  etc.
* **All the power of Jekyll**: Markdown, syntax highlighting, RSS, etc.
* **Fully compatible with Github Pages**
* **No need of local deployment**
* JS-based  pagination (see below why)
* (optional) Disqus comments
* (optional) Google Analytics

## Usage

### Quick Start
1. Fork this repository, rename it to *yourgithubusername.github.io*.
2. Clone the repository (or make changes directly in the browser).
3. Change parameters in *_config.yml*
4. Add and edit posts in *_posts* directory.
5. Any pushed changed will force Github to update the blog at http://yourgithubusername.github.io  
That's it!

This theme follows [Jekyll-now](https://github.com/barryclark/jekyll-now) Quick Start workflow, so check it for detailed explanation if you got confused by any step.

### Local deployment (optional)
1. Install [Ruby](https://www.ruby-lang.org/en/), run `gem install bundler` to install [Bundler](http://bundler.io).
2. Install Jekyll and plug-ins using a gem provided by Github: `gem install github-pages`
3. Clone your fork `git clone https://github.com/yourusername/yourusername.github.io.git`
4. Serve the site and watch for changes in realtime `bundler exec jekyll serve`
5. View your website at http://127.0.0.1:4000/
6. Commit any changes and push everything to your GitHub user repository. GitHub Pages will then rebuild and serve your website.


### Content
To add authors:

1. modify *_data/authors.yml* file
2. for new authors: if you need an author page, copy the file *author/_NEW.AUTHOR* to *author/yourauthorname.html*

Similarly, to add tags:

1. modify *_data/tags.yml* file
2. for new tags: if you need a tag page, copy the file *tag/_NEW.TAG* to *tag/yourtagname.html*

Sorry, step 2 is required in both cases due to Jekyll limitations, as it cannot generate pages dynamically

### Details
##### Pagination
Unfortunately, Jekyll provides static pagination only for posts. And Github doesn't support custom plugins, so we had to implement pagination dynamically on a client.

##### Repository structure
- Use **master** branch to start your blog. It has initial scratch to start quickly.
- **gh-pages** branch contains live demo blog. Checkout it only if you need to look at live demo sources as examples.

## Comparison with other Casper clones

| | YaCasper | Jasper | Kasper
--- | --- | --- | ---
Casper version | :white_check_mark: recent | :white_check_mark: recent | :no_entry_sign: outdated (1.1.1)
Github-Pages support | :white_check_mark: | :warning: using CI | :white_check_mark:
Tag pages | :white_check_mark: | :white_check_mark: | :no_entry_sign:
Multiple authors | :white_check_mark: | :no_entry_sign: [with hacks](https://github.com/biomadeira/jasper/issues/10)| :no_entry_sign:
Pagination | :warning: JS-based | :white_check_mark: | :white_check_mark: posts only

## Issues and contributing 

Let me know through about any issues using the [issue tracker](https://github.com/mtuner/YaCasper/issues).
Please improve my theme using pull-requests.

## Credits 
* [Ghost](https://github.com/TryGhost) team, for the great Casper theme
* [Jasper](https://github.com/biomadeira/jasper) and [Kasper](https://github.com/rosario/kasper) authors, for their great forks.
* Jekyll and Github

## Copyright & License

Copyright (C) 2016 - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

