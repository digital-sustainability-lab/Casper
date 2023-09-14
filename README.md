# Anleitung Casper Theme ändern:

### 1. Ghost auf Github herunterladen

- Casper-Dropdwon in Github als zip-Datei herunterladen
- Ordner: [Link](https://github.com/digital-sustainability-lab/Casper-Dropdown "Casper-Dropdown")

### 2. Casper-Dropdown auf Ghost hochladen

Gehe Ghost Website/ghost
Beta-Version: https://showroom-bcs.digisus-lab.ch/ghost

- auf Settings (unten links)
- Design
- Change Theme unten links
- upload Theme oben rechts
- Casper-Dropdown.zip hochladen
- Active Casper-Dropdown.zip

### 3. Dropdown erstellen

Gehe auf Ghost Settings / Navigation.
Mainpage erstellen: Titel (main1) -die Zahl hinter main muss einmalig sein
Subpage erstellen: Titel (subpage1) -die Zahl hinter sub muss die gleiche sein wie bei main, damit es eine Subpage wird

### 4. Tags

Für jedes neues Semester gibt es einen neuen Tag z.B HS21.

- Alle Posts vom Semester HS21 müssen mit dem Tag HS21 getagt werden.
- Falls ein Post mehrere Tags hat muss der HS21 der erste Tag sein.
- Damit alle Post mit Tag HS21 im Shworoom HS21 angezeigt werden muss unter Seetings/Navigation bei Showroom HS21, folgendes ergänzt werden: /tag/hs21/

Der komplette URL sollte danach so aussehen: https://showroom-bcs.digisus-lab.ch/ghost/tag/hs21/

### Routing

Damit auf Home nur Content vom aktuelle Semester angezeigt wird müssen die anderen Semester ausgeblendet werden.

Gehe zu: Content/settings/routes.yaml

Nach jedem Semester muss beim Filter das alte Semester hinzugefügt werden, damit dieses auf der Home Seite ausgeblendet wird.

```bash
 collections:
  /fs/:
    permalink: /fs/{slug}/
    template: index
    filter: primary_tag:[hs21] #hs21 wird jetzt nicht auf home(index) angezeigt
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

# Für Devs

### Ghost installation

- Anleitung [Link](https://ghost.org/docs/install/ubuntu/#install-ghost-cli "Ghost install ubuntu") von Install Ghost-CLI bis Run the install process
- Wichtig: für eine erfolgreiche installation muss es ein leerer Ordner sein

# Casper

The default theme for [Ghost](http://github.com/tryghost/ghost/). This is the latest development version of Casper! If you're just looking to download the latest release, head over to the [releases](https://github.com/TryGhost/Casper/releases) page.

&nbsp;

![screenshot-desktop](https://user-images.githubusercontent.com/1418797/183329195-8e8f2ee5-a473-4694-a813-a2575491209e.png)

&nbsp;

# First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

This theme has lots of code comments to help explain what's going on just by reading the code. Once you feel comfortable with how everything works, we also have full [theme API documentation](https://ghost.org/docs/themes/) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `index.hbs` - The main template to generate a list of posts, usually the home page
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"

One neat trick is that you can also create custom one-off templates by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

# Development

Casper styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# install dependencies
yarn install

# run development server
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
# create .zip file
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
- [Color Mod](https://github.com/jonathantneal/postcss-color-mod-function)

# SVG Icons

Casper uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

# Copyright & License

Copyright (c) 2013-2022 Ghost Foundation - Released under the [MIT license](LICENSE).
