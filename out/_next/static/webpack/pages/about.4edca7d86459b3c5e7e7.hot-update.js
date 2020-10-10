webpackHotUpdate_N_E("pages/about",{

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/*! exports provided: ArticleJsonLd, BlogJsonLd, BreadcrumbJsonLd, CorporateContactJsonLd, CourseJsonLd, DatasetJsonLd, DefaultSeo, EventJsonLd, FAQPageJsonLd, JobPostingJsonLd, LocalBusinessJsonLd, LogoJsonLd, NewsArticleJsonLd, NextSeo, ProductJsonLd, RecipeJsonLd, SocialProfileJsonLd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleJsonLd", function() { return ArticleJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogJsonLd", function() { return BlogJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbJsonLd", function() { return BreadCrumbJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateContactJsonLd", function() { return CorporateContactJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseJsonLd", function() { return CourseJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetJsonLd", function() { return DatasetJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSeo", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventJsonLd", function() { return EventJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQPageJsonLd", function() { return FAQPageJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostingJsonLd", function() { return JobPostingJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalBusinessJsonLd", function() { return LocalBusinessJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoJsonLd", function() { return LogoJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArticleJsonLd", function() { return NewsArticleJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextSeo", function() { return _default$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductJsonLd", function() { return ProductJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeJsonLd", function() { return RecipeJsonLd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialProfileJsonLd", function() { return SocialProfileJsonLd; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};

var buildTags = function buildTags(config) {
  var tagsToRender = [];

  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }

  var updatedTitle = '';

  if (config.title) {
    updatedTitle = config.title;

    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;

  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }

    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow"
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow"
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.mobileAlternate) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }

  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }

  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }

  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }

    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));

      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }

        if (config.openGraph.profile.lastName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }

        if (config.openGraph.profile.username) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }

        if (config.openGraph.profile.gender) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }

        if (config.openGraph.book.isbn) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }

        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }

        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }

        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }

        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }

        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }

        if (config.openGraph.article.section) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }

        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }

            if (actor.role) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }

        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }

        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }

        if (config.openGraph.video.duration) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }

        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }

        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }

        if (config.openGraph.video.series) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    }

    if (config.openGraph.title || config.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title || updatedTitle
      }));
    }

    if (config.openGraph.description || config.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description || config.description
      }));
    } // images


    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }

    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
          key: "og:image:0" + index,
          property: "og:image",
          content: image.url
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:image:alt0" + index,
            property: "og:image:alt",
            content: image.alt
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: image.width.toString()
          }));
        } else if (defaults.defaultOpenGraphImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: defaults.defaultOpenGraphImageWidth.toString()
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: image.height.toString()
          }));
        } else if (defaults.defaultOpenGraphImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: defaults.defaultOpenGraphImageHeight.toString()
          }));
        }
      });
    } // videos


    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }

    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }

    if (config.openGraph.videos && config.openGraph.videos.length) {
      config.openGraph.videos.forEach(function (video, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
          key: "og:video:0" + index,
          property: "og:video",
          content: video.url
        }));

        if (video.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:video:alt0" + index,
            property: "og:video:alt",
            content: video.alt
          }));
        }

        if (video.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: video.width.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: defaults.defaultOpenGraphVideoWidth.toString()
          }));
        }

        if (video.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: video.height.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: defaults.defaultOpenGraphVideoHeight.toString()
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }

    if (config.openGraph.site_name) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.site_name
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (tag) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", Object.assign({
        key: tag.name ? tag.name : tag.property
      }, tag)));
    });
  }

  return tagsToRender;
};

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, buildTags({
      title: title,
      titleTemplate: titleTemplate,
      dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
      dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var _default$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, buildTags({
      title: title,
      noindex: noindex,
      nofollow: nofollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      titleTemplate: titleTemplate,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

var minifyJsonLd = function minifyJsonLd(jsonld) {
  return JSON.stringify(JSON.parse(jsonld.replace(/[\u0000-\u0019]/g, '')));
};

var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-article" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      _ref$itemListElements = _ref.itemListElements,
      itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      " + itemListElements.map(function (itemListElement) {
    return "{\n        \"@type\": \"ListItem\",\n        \"position\": " + itemListElement.position + ",\n        \"item\": {\n          \"@id\": \"" + itemListElement.item + "\",\n          \"name\": \"" + itemListElement.name + "\"\n        }\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-breadcrumb" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildQuestions = function buildQuestions(mainEntity) {
  return "\n  " + mainEntity.map(function (question) {
    return "{\n      \"@type\": \"Question\",\n      \"name\": \"" + question.questionName + "\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"" + question.acceptedAnswerText + "\"\n      }\n  }";
  });
};

var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
  var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [" + buildQuestions(mainEntity) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-faq-page"
  }));
};

var buildBaseSalary = function buildBaseSalary(baseSalary) {
  return "\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    " + (baseSalary.currency ? "\"currency\": \"" + baseSalary.currency + "\"," : '') + "\n    \"value\": {\n      \"@type\": \"QuantitativeValue\",\n      " + (baseSalary.value ? "\"value\": \"" + baseSalary.value + "\"," : '') + "\n      " + (baseSalary.unitText ? "\"unitText\": \"" + baseSalary.unitText + "\"" : '') + "\n    }\n  },\n";
};

var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
  var baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"JobPosting\",\n    " + (baseSalary ? buildBaseSalary(baseSalary) : '') + "\n    \"datePosted\": \"" + datePosted + "\",\n    \"description\": \"" + description + "\",\n    " + (employmentType ? "\"employmentType\": \"" + employmentType + "\"," : '') + "\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"" + hiringOrganization.name + "\",\n      \"sameAs\" : \"" + hiringOrganization.sameAs + "\"\n      " + (hiringOrganization.logo ? ",\"logo\": \"" + hiringOrganization.logo + "\"" : '') + "\n    },\n\n    \"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"" + jobLocation.addressLocality + "\",\n        \"addressRegion\": \"" + jobLocation.addressRegion + "\",\n        \"postalCode\" : \"" + jobLocation.postalCode + "\",\n        \"streetAddress\" : \"" + jobLocation.streetAddress + "\",\n        \"addressCountry\" : \"" + jobLocation.addressCountry + "\"\n      }\n    },\n    " + (applicantLocationRequirements ? " \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"" + applicantLocationRequirements + "\"\n    }," : '') + "\n    " + (jobLocationType ? "\"jobLocationType\": \"" + jobLocationType + "\"," : '') + "\n    " + (validThrough ? "\"validThrough\": \"" + validThrough + "\"," : '') + "\n    \"title\": \"" + title + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-jobPosting"
  }));
};

var BlogJsonLd = function BlogJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-blog" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var CourseJsonLd = function CourseJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"" + courseName + "\",\n    \"description\": \"" + description + "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + providerName + "\"" + (providerUrl ? ",\n      \"sameAs\": \"" + providerUrl + "\"" : '') + "\n    }\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-course" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var DatasetJsonLd = function DatasetJsonLd(_ref) {
  var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"" + description + "\",\n    \"name\": \"" + name + "\"" + (license ? ",\n        \"license\": \"" + license + "\"" : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-dataset"
  }));
};

var formatIfArray = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildAddress = (function (address) {
  return "\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"" + address.streetAddress + "\",\n    \"addressLocality\": \"" + address.addressLocality + "\",\n    " + (address.addressRegion ? "\"addressRegion\": \"" + address.addressRegion + "\"," : '') + "\n    \"postalCode\": \"" + address.postalCode + "\",\n    \"addressCountry\": \"" + address.addressCountry + "\"\n  },\n";
});

var buildGeo = function buildGeo(geo) {
  return "\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"" + geo.latitude + "\",\n    \"longitude\": \"" + geo.longitude + "\"\n  },\n";
};

var buildRating = function buildRating(rating) {
  return "\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"" + rating.ratingValue + "\",\n    \"ratingCount\": \"" + rating.ratingCount + "\"\n  },\n";
};

var buildOpeningHours = function buildOpeningHours(openingHours) {
  return "\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    " + (openingHours.dayOfWeek ? "\"dayOfWeek\": " + formatIfArray(openingHours.dayOfWeek) + "," : '') + "\n    \"opens\": \"" + openingHours.opens + "\",\n    " + (openingHours.validFrom ? "\"validFrom\": \"" + openingHours.validFrom + "\"," : '') + "\n    " + (openingHours.validThrough ? "\"validThrough\": \"" + openingHours.validThrough + "\"," : '') + "\n    \"closes\": \"" + openingHours.closes + "\"\n  }\n";
};

var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      priceRange = _ref.priceRange,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    " + (id ? "\"@id\": \"" + id + "\"," : '') + "\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (telephone ? "\"telephone\": \"" + telephone + "\"," : '') + "\n    " + buildAddress(address) + "\n    " + (geo ? "" + buildGeo(geo) : '') + "\n    " + (rating ? "" + buildRating(rating) : '') + "\n    " + (priceRange ? "\"priceRange\": \"" + priceRange + "\"," : '') + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : '') + "\n    " + (sameAs ? "\"sameAs\": [" + sameAs.map(function (url) {
    return "\"" + url + "\"";
  }) + "]," : '') + "\n    " + (openingHours ? "\"openingHoursSpecification\": " + (Array.isArray(openingHours) ? "[" + openingHours.map(function (hours) {
    return "" + buildOpeningHours(hours);
  }) + "]" : buildOpeningHours(openingHours)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-local-business" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var LogoJsonLd = function LogoJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    \"logo\": \"" + logo + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-logo" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildBrand = function buildBrand(brand) {
  return "\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"" + brand + "\"\n    },\n";
};

var buildReviewRating = function buildReviewRating(rating) {
  return rating ? "\"reviewRating\": {\n          \"@type\": \"Rating\",\n          " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n          " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n          \"ratingValue\": \"" + rating.ratingValue + "\"\n        }" : '';
};

var buildAuthor = function buildAuthor(author) {
  return "\n  \"author\": {\n      \"@type\": \"" + author.type + "\",\n      \"name\": \"" + author.name + "\"\n  },\n";
};

var buildPublisher = function buildPublisher(publisher) {
  return "\n  \"publisher\": {\n      \"@type\": \"" + publisher.type + "\",\n      \"name\": \"" + publisher.name + "\"\n  },\n";
};

var buildReviews = function buildReviews(reviews) {
  return "\n\"review\": [\n  " + reviews.map(function (review) {
    return "{\n      \"@type\": \"Review\",\n      " + (review.author ? buildAuthor(review.author) : '') + "\n      " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n      " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n      " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n      " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n      " + buildReviewRating(review.reviewRating) + "\n  }";
  }) + "],";
};

var buildAggregateRating = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"reviewCount\": \"" + aggregateRating.reviewCount + "\"\n    },\n";
}; // TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic


var buildOffers = function buildOffers(offers) {
  return "\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"" + offers.priceCurrency + "\",\n    " + (offers.priceValidUntil ? "\"priceValidUntil\": \"" + offers.priceValidUntil + "\"," : '') + "\n    " + (offers.itemCondition ? "\"itemCondition\": \"" + offers.itemCondition + "\"," : '') + "\n    " + (offers.availability ? "\"availability\": \"" + offers.availability + "\"," : '') + "\n    " + (offers.url ? "\"url\": \"" + offers.url + "\"," : '') + "\n    " + (offers.seller ? "\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + offers.seller.name + "\"\n    },\n    " : '') + "\n    \"price\": \"" + offers.price + "\"\n  }\n";
};

var buildAggregateOffer = function buildAggregateOffer(offer) {
  return "\n  {\n    \"@type\": \"AggregateOffer\",\n    \"priceCurrency\": \"" + offer.priceCurrency + "\",\n    " + (offer.highPrice ? "\"highPrice\": \"" + offer.highPrice + "\"," : '') + "\n    " + (offer.offerCount ? "\"offerCount\": \"" + offer.offerCount + "\"," : '') + "\n    \"lowPrice\": \"" + offer.lowPrice + "\"\n  }\n";
};

var ProductJsonLd = function ProductJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers,
      aggregateOffer = _ref.aggregateOffer;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":" + formatIfArray(images) + ",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (mpn ? "\"mpn\": \"" + mpn + "\"," : '') + "\n    " + (sku ? "\"sku\": \"" + sku + "\"," : '') + "\n    " + (gtin8 ? "\"gtin8\": \"" + gtin8 + "\"," : '') + "\n    " + (gtin13 ? "\"gtin13\": \"" + gtin13 + "\"," : '') + "\n    " + (gtin14 ? "\"gtin14\": \"" + gtin14 + "\"," : '') + "\n    " + (brand ? buildBrand(brand) : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (aggregateRating ? buildAggregateRating(aggregateRating) : '') + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    " + (aggregateOffer && !offers ? "\"offers\": " + buildAggregateOffer(aggregateOffer) + "," : '') + "\n    \"name\": \"" + productName + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-product" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"name\": \"" + name + "\",\n    \"url\": \"" + url + "\",\n    \"sameAs\": [\n      " + sameAs.map(function (socialUrl) {
    return "\"" + socialUrl + "\"";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-social" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var formatIfArray$1 = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildContactPoint = function buildContactPoint(contactPoint) {
  return contactPoint.map(function (contact) {
    return "{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"" + contact.telephone + "\",\n    \"contactType\": \"" + contact.contactType + "\"" + (contact.areaServed ? ",\n    \"areaServed\": " + formatIfArray$1(contact.areaServed) : '') + (contact.availableLanguage ? ",\n    \"availableLanguage\": " + formatIfArray$1(contact.availableLanguage) : '') + (contact.contactOption ? ",\n    \"contactOption\": \"" + contact.contactOption + "\"" : '') + "\n    }";
  });
};

var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    " + (logo ? "\"logo\": \"" + logo + "\"," : '') + "\n    \"contactPoint\": [" + buildContactPoint(contactPoint) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-corporate-contact" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
  var keyOverride = _ref.keyOverride,
      url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"articleSection\":\"" + section + "\",\n    \"keywords\": \"" + keywords + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateCreated\": \"" + (dateCreated || datePublished) + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\",\n    \"articleBody\": \"" + body + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-newsarticle" + (keyOverride ? "-" + keyOverride : '')
  }));
};

var buildLocation = function buildLocation(location) {
  return "\n  \"location\": {\n    \"@type\": \"Place\",\n    " + buildAddress(location.address) + "\n    " + (location.sameAs ? "\"sameAs\": \"" + location.sameAs + "\"," : "") + "\n    \"name\": \"" + location.name + "\"\n  },\n";
};

var EventJsonLd = function EventJsonLd(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"" + startDate + "\",\n    \"endDate\": \"" + endDate + "\",\n    " + buildLocation(location) + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : "") + "\n    " + (url ? "\"url\": \"" + url + "\"," : "") + "\n    " + (description ? "\"description\": \"" + description + "\"," : "") + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-event"
  }));
};

var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"ratingCount\": \"" + aggregateRating.ratingCount + "\"\n    },\n";
};

var buildInstruction = function buildInstruction(instruction) {
  return "{\n  \"@type\": \"HowToStep\",\n  \"name\": \"" + instruction.name + "\",\n  \"text\": \"" + instruction.text + "\",\n  \"url\": \"" + instruction.url + "\",\n  \"image\": \"" + instruction.image + "\"\n}";
};

var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
  return "\n  \"interactionStatistic\": {\n    \"@type\": \"InteractionCounter\",\n    \"interactionType\": { \"@type\": \"http://schema.org/WatchAction\" },\n    \"userInteractionCount\": " + watchCount + "\n  }\n";
};

var buildVideo = function buildVideo(video) {
  return "\n  \"video\": {\n      \"@type\": \"VideoObject\",\n      \"name\": \"" + video.name + "\",\n      \"thumbnailUrl\": [\n        " + (video.thumbnailUrls || []).map(function (thumbnailUrl) {
    return "\"" + thumbnailUrl + "\"";
  }).join(',') + "\n       ],\n      \"description\": \"" + video.description + "\",\n      \"contentUrl\": \"" + video.contentUrl + "\",\n      \"uploadDate\": \"" + video.uploadDate + "\",\n      \"duration\": \"" + video.duration + "\",\n      " + (video.embedUrl ? "\"embedUrl\": \"" + video.embedUrl + "\"," : "") + "\n      " + (video.expires ? "\"expires\": \"" + video.expires + "\"," : "") + "\n      " + (video.watchCount ? buildInteractionStatistic(video.watchCount) : "") + "\n    },\n";
};

var RecipeJsonLd = function RecipeJsonLd(_ref) {
  var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Recipe\",\n    \"name\": \"" + name + "\",\n    \"description\": \"" + description + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }).join(',') + "\n    ],\n    " + (prepTime ? "\"prepTime\": \"" + prepTime + "\"," : "") + "\n    " + (cookTime ? "\"cookTime\": \"" + cookTime + "\"," : "") + "\n    " + (totalTime ? "\"totalTime\": \"" + totalTime + "\"," : "") + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : "") + "\n    " + (yields ? "\"recipeYield\": \"" + yields + "\"," : "") + "\n    " + (category ? "\"recipeCategory\": \"" + category + "\"," : "") + "\n    " + (cuisine ? "\"recipeCuisine\": \"" + cuisine + "\"," : "") + "\n    " + (calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + calories + " calories\" }," : "") + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (video ? buildVideo(video) : '') + "\n    \"recipeIngredient\": [\n      " + ingredients.map(function (ingredient) {
    return "\"" + ingredient + "\"";
  }).join(',') + "\n    ],\n    \"recipeInstructions\": [\n      " + instructions.map(buildInstruction).join(',') + "\n    ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(minifyJsonLd(jslonld)),
    key: "jsonld-recipe"
  }));
};




/***/ }),

/***/ "./src/components/seo.tsx":
/*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_sitemetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/sitemetadata */ "./src/hooks/sitemetadata.ts");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\nt0ny\\development\\www-dmtp-next\\src\\components\\seo.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




var SEO = function SEO(_ref) {
  _s();

  var title = _ref.title,
      description = _ref.description,
      path = _ref.path,
      lang = _ref.lang,
      index = _ref.index;

  var _useSiteMetadata = Object(_hooks_sitemetadata__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      siteTitle = _useSiteMetadata.siteTitle,
      siteDescription = _useSiteMetadata.siteDescription,
      siteUrl = _useSiteMetadata.siteUrl,
      author = _useSiteMetadata.author,
      keywords = _useSiteMetadata.keywords;

  var metaTitle = title !== "" ? "".concat(title, " | ").concat(siteTitle) : siteTitle;
  var metaDescription = description !== "" ? description : title == "Home" ? siteDescription : "";
  var url = "".concat(siteUrl).concat(path);
  return (// <GatsbySeo
    //   title={metaTitle}
    //   description={metaDescription}
    //   canonical={url}
    //   noindex={!index}
    //   nofollow={!index}
    //   language="en_US"
    //   metaTags={[
    //     {
    //       name: "keywords",
    //       content: keywords.join(", "),
    //     },
    //   ]}
    //   openGraph={{
    //     url: url,
    //     title: metaTitle,
    //     description: metaDescription,
    //     locale: "en_US",
    //     site_name: siteTitle,
    //     type: "website",
    //   }}
    // />
    __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
      title: metaTitle,
      description: metaDescription,
      canonical: url,
      noindex: !index,
      nofollow: !index,
      additionalMetaTags: [{
        name: "keywords",
        content: keywords.join(", ")
      }],
      openGraph: {
        url: url,
        title: metaTitle,
        description: metaDescription,
        locale: "en_US",
        site_name: siteTitle,
        type: "website"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }
    })
    /*
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          property: `og:site_title`,
          content: siteTitle,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: author,
        },
        {
          name: "keywords",
          content: keywords.join(", "),
        },
        {
          name: "robots",
          content: "all, index, follow",
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:email`,
          content: email,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          name: `og:locality`,
          content: `New York City`,
        },
        {
          name: `og:region`,
          content: `NY`,
        },
        {
          name: `og:postal-code`,
          content: `10032`,
        },
        {
          name: `og:country-name`,
          content: `USA`,
        },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ]}
    />
    */

  );
};

_s(SEO, "g2HiByP4nO3LTr9d+1/rQj21ljQ=", false, function () {
  return [_hooks_sitemetadata__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = SEO;
SEO.defaultProps = {
  lang: "en",
  title: "",
  description: "",
  path: "",
  index: true
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);

var _c;

$RefreshReg$(_c, "SEO");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtc2VvL2xpYi9uZXh0LXNlby5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Nlby50c3giXSwibmFtZXMiOlsiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJsYW5nIiwiaW5kZXgiLCJ1c2VTaXRlTWV0YWRhdGEiLCJzaXRlVGl0bGUiLCJzaXRlRGVzY3JpcHRpb24iLCJzaXRlVXJsIiwiYXV0aG9yIiwia2V5d29yZHMiLCJtZXRhVGl0bGUiLCJtZXRhRGVzY3JpcHRpb24iLCJ1cmwiLCJuYW1lIiwiY29udGVudCIsImpvaW4iLCJsb2NhbGUiLCJzaXRlX25hbWUiLCJ0eXBlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDWTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQiw0Q0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsc0JBQXNCLDRDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxz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QU5HLE9BWmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOUNGO0FBcUlELENBbkpEOztHQUFNcEIsRztVQU9BTSwyRDs7O0tBUEFOLEc7QUFxSk5BLEdBQUcsQ0FBQ3FCLFlBQUosR0FBbUI7QUFDakJqQixNQUFJLEVBQUUsSUFEVztBQUVqQkgsT0FBSyxFQUFFLEVBRlU7QUFHakJDLGFBQVcsRUFBRSxFQUhJO0FBSWpCQyxNQUFJLEVBQUUsRUFKVztBQUtqQkUsT0FBSyxFQUFFO0FBTFUsQ0FBbkI7QUFRZUwsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuNGVkY2E3ZDg2NDU5YjNjNWU3ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgdGVtcGxhdGVUaXRsZTogJycsXG4gIG5vaW5kZXg6IGZhbHNlLFxuICBub2ZvbGxvdzogZmFsc2UsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoOiAwLFxuICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ6IDBcbn07XG5cbnZhciBidWlsZFRhZ3MgPSBmdW5jdGlvbiBidWlsZFRhZ3MoY29uZmlnKSB7XG4gIHZhciB0YWdzVG9SZW5kZXIgPSBbXTtcblxuICBpZiAoY29uZmlnLnRpdGxlVGVtcGxhdGUpIHtcbiAgICBkZWZhdWx0cy50ZW1wbGF0ZVRpdGxlID0gY29uZmlnLnRpdGxlVGVtcGxhdGU7XG4gIH1cblxuICB2YXIgdXBkYXRlZFRpdGxlID0gJyc7XG5cbiAgaWYgKGNvbmZpZy50aXRsZSkge1xuICAgIHVwZGF0ZWRUaXRsZSA9IGNvbmZpZy50aXRsZTtcblxuICAgIGlmIChkZWZhdWx0cy50ZW1wbGF0ZVRpdGxlKSB7XG4gICAgICB1cGRhdGVkVGl0bGUgPSBkZWZhdWx0cy50ZW1wbGF0ZVRpdGxlLnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRUaXRsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCB7XG4gICAgICBrZXk6IFwidGl0bGVcIlxuICAgIH0sIHVwZGF0ZWRUaXRsZSkpO1xuICB9XG5cbiAgdmFyIG5vaW5kZXggPSBjb25maWcubm9pbmRleCB8fCBkZWZhdWx0cy5ub2luZGV4IHx8IGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4O1xuICB2YXIgbm9mb2xsb3cgPSBjb25maWcubm9mb2xsb3cgfHwgZGVmYXVsdHMubm9mb2xsb3cgfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93O1xuXG4gIGlmIChub2luZGV4IHx8IG5vZm9sbG93KSB7XG4gICAgaWYgKGNvbmZpZy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4KSB7XG4gICAgICBkZWZhdWx0cy5ub2luZGV4ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93KSB7XG4gICAgICBkZWZhdWx0cy5ub2ZvbGxvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInJvYm90c1wiLFxuICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgIGNvbnRlbnQ6IChub2luZGV4ID8gJ25vaW5kZXgnIDogJ2luZGV4JykgKyBcIixcIiArIChub2ZvbGxvdyA/ICdub2ZvbGxvdycgOiAnZm9sbG93JylcbiAgICB9KSk7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcImdvb2dsZWJvdFwiLFxuICAgICAgbmFtZTogXCJnb29nbGVib3RcIixcbiAgICAgIGNvbnRlbnQ6IChub2luZGV4ID8gJ25vaW5kZXgnIDogJ2luZGV4JykgKyBcIixcIiArIChub2ZvbGxvdyA/ICdub2ZvbGxvdycgOiAnZm9sbG93JylcbiAgICB9KSk7XG4gIH0gZWxzZSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcInJvYm90c1wiLFxuICAgICAgbmFtZTogXCJyb2JvdHNcIixcbiAgICAgIGNvbnRlbnQ6IFwiaW5kZXgsZm9sbG93XCJcbiAgICB9KSk7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcImdvb2dsZWJvdFwiLFxuICAgICAgbmFtZTogXCJnb29nbGVib3RcIixcbiAgICAgIGNvbnRlbnQ6IFwiaW5kZXgsZm9sbG93XCJcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICBjb250ZW50OiBjb25maWcuZGVzY3JpcHRpb25cbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLm1vYmlsZUFsdGVybmF0ZSkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgIGtleTogXCJtb2JpbGVBbHRlcm5hdGVcIixcbiAgICAgIG1lZGlhOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLm1lZGlhLFxuICAgICAgaHJlZjogY29uZmlnLm1vYmlsZUFsdGVybmF0ZS5ocmVmXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5sYW5ndWFnZUFsdGVybmF0ZXMgJiYgY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChsYW5ndWFnZUFsdGVybmF0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICByZWw6IFwiYWx0ZXJuYXRlXCIsXG4gICAgICAgIGtleTogXCJsYW5ndWFnZUFsdGVybmF0ZS1cIiArIGxhbmd1YWdlQWx0ZXJuYXRlLmhyZWZMYW5nLFxuICAgICAgICBocmVmTGFuZzogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWY6IGxhbmd1YWdlQWx0ZXJuYXRlLmhyZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChjb25maWcudHdpdHRlcikge1xuICAgIGlmIChjb25maWcudHdpdHRlci5jYXJkVHlwZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpjYXJkXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpjYXJkXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLnNpdGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcInR3aXR0ZXI6c2l0ZVwiLFxuICAgICAgICBuYW1lOiBcInR3aXR0ZXI6c2l0ZVwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcudHdpdHRlci5zaXRlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmhhbmRsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpjcmVhdG9yXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpjcmVhdG9yXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLmhhbmRsZVxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcuZmFjZWJvb2spIHtcbiAgICBpZiAoY29uZmlnLmZhY2Vib29rLmFwcElkKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgcHJvcGVydHk6IFwiZmI6YXBwX2lkXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5mYWNlYm9vay5hcHBJZFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb25maWcub3BlbkdyYXBoKSB7XG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudXJsIHx8IGNvbmZpZy5jYW5vbmljYWwpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnVybFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzp1cmxcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC51cmwgfHwgY29uZmlnLmNhbm9uaWNhbFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnR5cGUpIHtcbiAgICAgIHZhciB0eXBlID0gY29uZmlnLm9wZW5HcmFwaC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzp0eXBlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgY29udGVudDogdHlwZVxuICAgICAgfSkpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3Byb2ZpbGUnICYmIGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZSkge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmZpcnN0TmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmZpcnN0X25hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmZpcnN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUubGFzdE5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6bGFzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUubGFzdE5hbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6dXNlcm5hbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6dXNlcm5hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS51c2VybmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJwcm9maWxlOmdlbmRlclwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLmdlbmRlclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYm9vaycgJiYgY29uZmlnLm9wZW5HcmFwaC5ib29rKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmJvb2suYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJib29rOmF1dGhvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYm9vazphdXRob3JcIixcbiAgICAgICAgICAgICAgY29udGVudDogYXV0aG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm4pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYm9vazppc2JuXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOmlzYm5cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYm9vay5pc2JuXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5yZWxlYXNlRGF0ZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJib29rOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYm9vazpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYm9vay5yZWxlYXNlRGF0ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2sudGFncyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2sudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmJvb2sudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJib29rOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYm9vazp0YWdcIixcbiAgICAgICAgICAgICAgY29udGVudDogdGFnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FydGljbGUnICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZSkge1xuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnB1Ymxpc2hlZFRpbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpwdWJsaXNoZWRfdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnB1Ymxpc2hlZFRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLm1vZGlmaWVkVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOm1vZGlmaWVkX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLm1vZGlmaWVkVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuZXhwaXJhdGlvblRpbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpleHBpcmF0aW9uX3RpbWVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6ZXhwaXJhdGlvbl90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuZXhwaXJhdGlvblRpbWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmF1dGhvcnMgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmF1dGhvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLmF1dGhvcnMuZm9yRWFjaChmdW5jdGlvbiAoYXV0aG9yLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTphdXRob3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcImFydGljbGU6YXV0aG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGF1dGhvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5zZWN0aW9uKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6c2VjdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpzZWN0aW9uXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuc2VjdGlvblxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUudGFncyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUudGFncy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmFydGljbGUudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTp0YWdcIixcbiAgICAgICAgICAgICAgY29udGVudDogdGFnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoKHR5cGUgPT09ICd2aWRlby5tb3ZpZScgfHwgdHlwZSA9PT0gJ3ZpZGVvLmVwaXNvZGUnIHx8IHR5cGUgPT09ICd2aWRlby50dl9zaG93JyB8fCB0eXBlID09PSAndmlkZW8ub3RoZXInKSAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLmFjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhY3RvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChhY3Rvci5wcm9maWxlKSB7XG4gICAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwidmlkZW86YWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3JcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rvci5wcm9maWxlXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdG9yLnJvbGUpIHtcbiAgICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3Rvcjpyb2xlOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmFjdG9yOnJvbGVcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rvci5yb2xlXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLmRpcmVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChkaXJlY3RvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmRpcmVjdG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzpkaXJlY3RvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBkaXJlY3RvclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzLmZvckVhY2goZnVuY3Rpb24gKHdyaXRlciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOndyaXRlcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86d3JpdGVyXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHdyaXRlclxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmR1cmF0aW9uXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLmR1cmF0aW9uLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5yZWxlYXNlRGF0ZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpyZWxlYXNlX2RhdGVcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC52aWRlby5yZWxlYXNlRGF0ZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJ2aWRlbzp0YWc6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllcykge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpzZXJpZXNcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC52aWRlby5zZXJpZXNcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC50aXRsZSB8fCBjb25maWcudGl0bGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnRpdGxlXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnRpdGxlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudGl0bGUgfHwgdXBkYXRlZFRpdGxlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguZGVzY3JpcHRpb24gfHwgY29uZmlnLmRlc2NyaXB0aW9uKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpkZXNjcmlwdGlvblwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpkZXNjcmlwdGlvblwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmRlc2NyaXB0aW9uIHx8IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgICAgfSkpO1xuICAgIH0gLy8gaW1hZ2VzXG5cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0KSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQgPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLmltYWdlcyAmJiBjb25maWcub3BlbkdyYXBoLmltYWdlcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24gKGltYWdlLCBpbmRleCkge1xuICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAga2V5OiBcIm9nOmltYWdlOjBcIiArIGluZGV4LFxuICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlXCIsXG4gICAgICAgICAgY29udGVudDogaW1hZ2UudXJsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoaW1hZ2UuYWx0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOmltYWdlOmFsdDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6YWx0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBpbWFnZS5hbHRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1hZ2Uud2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiBpbWFnZS53aWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOmltYWdlOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzppbWFnZTp3aWR0aFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZS5oZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogaW1hZ2UuaGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOmltYWdlOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzppbWFnZTpoZWlnaHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IC8vIHZpZGVvc1xuXG5cbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0ID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlb3MgJiYgY29uZmlnLm9wZW5HcmFwaC52aWRlb3MubGVuZ3RoKSB7XG4gICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvcy5mb3JFYWNoKGZ1bmN0aW9uICh2aWRlbywgaW5kZXgpIHtcbiAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgIGtleTogXCJvZzp2aWRlbzowXCIgKyBpbmRleCxcbiAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlb1wiLFxuICAgICAgICAgIGNvbnRlbnQ6IHZpZGVvLnVybFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKHZpZGVvLmFsdCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzp2aWRlbzphbHQwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOmFsdFwiLFxuICAgICAgICAgICAgY29udGVudDogdmlkZW8uYWx0XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZpZGVvLndpZHRoKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzp3aWR0aFwiLFxuICAgICAgICAgICAgY29udGVudDogdmlkZW8ud2lkdGgudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzp2aWRlbzp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6dmlkZW86d2lkdGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW8uaGVpZ2h0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzpoZWlnaHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHZpZGVvLmhlaWdodC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzp2aWRlbzpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6dmlkZW86aGVpZ2h0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgubG9jYWxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpsb2NhbGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6bG9jYWxlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgubG9jYWxlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguc2l0ZV9uYW1lKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJvZzpzaXRlX25hbWVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6c2l0ZV9uYW1lXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguc2l0ZV9uYW1lXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5jYW5vbmljYWwpIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICByZWw6IFwiY2Fub25pY2FsXCIsXG4gICAgICBocmVmOiBjb25maWcuY2Fub25pY2FsLFxuICAgICAga2V5OiBcImNhbm9uaWNhbFwiXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGNvbmZpZy5hZGRpdGlvbmFsTWV0YVRhZ3MgJiYgY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncy5sZW5ndGggPiAwKSB7XG4gICAgY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBrZXk6IHRhZy5uYW1lID8gdGFnLm5hbWUgOiB0YWcucHJvcGVydHlcbiAgICAgIH0sIHRhZykpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0YWdzVG9SZW5kZXI7XG59O1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICB0aXRsZVRlbXBsYXRlID0gX3RoaXMkcHJvcHMudGl0bGVUZW1wbGF0ZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzID0gX3RoaXMkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9JbmRleCA9IF90aGlzJHByb3BzJGRhbmdlcm91cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGhpcyRwcm9wcyRkYW5nZXJvdXMsXG4gICAgICAgIF90aGlzJHByb3BzJGRhbmdlcm91czIgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyxcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cgPSBfdGhpcyRwcm9wcyRkYW5nZXJvdXMyID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91czIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gX3RoaXMkcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNhbm9uaWNhbCA9IF90aGlzJHByb3BzLmNhbm9uaWNhbCxcbiAgICAgICAgZmFjZWJvb2sgPSBfdGhpcyRwcm9wcy5mYWNlYm9vayxcbiAgICAgICAgb3BlbkdyYXBoID0gX3RoaXMkcHJvcHMub3BlbkdyYXBoLFxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfdGhpcyRwcm9wcy5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICAgIHR3aXR0ZXIgPSBfdGhpcyRwcm9wcy50d2l0dGVyLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgICBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQgPSBfdGhpcyRwcm9wcy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICAgICAgbW9iaWxlQWx0ZXJuYXRlID0gX3RoaXMkcHJvcHMubW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgICBsYW5ndWFnZUFsdGVybmF0ZXMgPSBfdGhpcyRwcm9wcy5sYW5ndWFnZUFsdGVybmF0ZXM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgYnVpbGRUYWdzKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRpdGxlVGVtcGxhdGU6IHRpdGxlVGVtcGxhdGUsXG4gICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4OiBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4LFxuICAgICAgZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3c6IGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93LFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgY2Fub25pY2FsOiBjYW5vbmljYWwsXG4gICAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICAgIGFkZGl0aW9uYWxNZXRhVGFnczogYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoOiBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCxcbiAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodDogZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0LFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGg6IGRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoLFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0OiBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQsXG4gICAgICBtb2JpbGVBbHRlcm5hdGU6IG1vYmlsZUFsdGVybmF0ZSxcbiAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29tcG9uZW50KTtcblxudmFyIF9kZWZhdWx0JDEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoX2RlZmF1bHQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgIHJldHVybiBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBfZGVmYXVsdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzLnRpdGxlLFxuICAgICAgICBfdGhpcyRwcm9wcyRub2luZGV4ID0gX3RoaXMkcHJvcHMubm9pbmRleCxcbiAgICAgICAgbm9pbmRleCA9IF90aGlzJHByb3BzJG5vaW5kZXggPT09IHZvaWQgMCA/IGZhbHNlIDogX3RoaXMkcHJvcHMkbm9pbmRleCxcbiAgICAgICAgbm9mb2xsb3cgPSBfdGhpcyRwcm9wcy5ub2ZvbGxvdyxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsID0gX3RoaXMkcHJvcHMuY2Fub25pY2FsLFxuICAgICAgICBvcGVuR3JhcGggPSBfdGhpcyRwcm9wcy5vcGVuR3JhcGgsXG4gICAgICAgIGZhY2Vib29rID0gX3RoaXMkcHJvcHMuZmFjZWJvb2ssXG4gICAgICAgIHR3aXR0ZXIgPSBfdGhpcyRwcm9wcy50d2l0dGVyLFxuICAgICAgICBhZGRpdGlvbmFsTWV0YVRhZ3MgPSBfdGhpcyRwcm9wcy5hZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICAgIHRpdGxlVGVtcGxhdGUgPSBfdGhpcyRwcm9wcy50aXRsZVRlbXBsYXRlLFxuICAgICAgICBtb2JpbGVBbHRlcm5hdGUgPSBfdGhpcyRwcm9wcy5tb2JpbGVBbHRlcm5hdGUsXG4gICAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF90aGlzJHByb3BzLmxhbmd1YWdlQWx0ZXJuYXRlcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3Moe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbm9pbmRleDogbm9pbmRleCxcbiAgICAgIG5vZm9sbG93OiBub2ZvbGxvdyxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgIGNhbm9uaWNhbDogY2Fub25pY2FsLFxuICAgICAgZmFjZWJvb2s6IGZhY2Vib29rLFxuICAgICAgb3BlbkdyYXBoOiBvcGVuR3JhcGgsXG4gICAgICBhZGRpdGlvbmFsTWV0YVRhZ3M6IGFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgIHR3aXR0ZXI6IHR3aXR0ZXIsXG4gICAgICB0aXRsZVRlbXBsYXRlOiB0aXRsZVRlbXBsYXRlLFxuICAgICAgbW9iaWxlQWx0ZXJuYXRlOiBtb2JpbGVBbHRlcm5hdGUsXG4gICAgICBsYW5ndWFnZUFsdGVybmF0ZXM6IGxhbmd1YWdlQWx0ZXJuYXRlc1xuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gX2RlZmF1bHQ7XG59KENvbXBvbmVudCk7XG5cbnZhciBtYXJrdXAgPSBmdW5jdGlvbiBtYXJrdXAoanNvbmxkKSB7XG4gIHJldHVybiB7XG4gICAgX19odG1sOiBqc29ubGRcbiAgfTtcbn07XG5cbnZhciBtaW5pZnlKc29uTGQgPSBmdW5jdGlvbiBtaW5pZnlKc29uTGQoanNvbmxkKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKGpzb25sZC5yZXBsYWNlKC9bXFx1MDAwMC1cXHUwMDE5XS9nLCAnJykpKTtcbn07XG5cbnZhciBBcnRpY2xlSnNvbkxkID0gZnVuY3Rpb24gQXJ0aWNsZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIF9yZWYkaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICBpbWFnZXMgPSBfcmVmJGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGltYWdlcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBfcmVmJGRhdGVNb2RpZmllZCA9IF9yZWYuZGF0ZU1vZGlmaWVkLFxuICAgICAgZGF0ZU1vZGlmaWVkID0gX3JlZiRkYXRlTW9kaWZpZWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJGRhdGVNb2RpZmllZCxcbiAgICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgICAgcHVibGlzaGVyTG9nbyA9IF9yZWYucHVibGlzaGVyTG9nbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkFydGljbGVcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwicHVibGlzaGVyXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHVibGlzaGVyTmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwibG9nb1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJJbWFnZU9iamVjdFxcXCIsXFxuICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgcHVibGlzaGVyTG9nbyArIFwiXFxcIlxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtYXJ0aWNsZVwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgQnJlYWRDcnVtYkpzb25MZCA9IGZ1bmN0aW9uIEJyZWFkQ3J1bWJKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgX3JlZiRpdGVtTGlzdEVsZW1lbnRzID0gX3JlZi5pdGVtTGlzdEVsZW1lbnRzLFxuICAgICAgaXRlbUxpc3RFbGVtZW50cyA9IF9yZWYkaXRlbUxpc3RFbGVtZW50cyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGl0ZW1MaXN0RWxlbWVudHM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJCcmVhZGNydW1iTGlzdFxcXCIsXFxuICAgIFxcXCJpdGVtTGlzdEVsZW1lbnRcXFwiOiBbXFxuICAgICAgXCIgKyBpdGVtTGlzdEVsZW1lbnRzLm1hcChmdW5jdGlvbiAoaXRlbUxpc3RFbGVtZW50KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkxpc3RJdGVtXFxcIixcXG4gICAgICAgIFxcXCJwb3NpdGlvblxcXCI6IFwiICsgaXRlbUxpc3RFbGVtZW50LnBvc2l0aW9uICsgXCIsXFxuICAgICAgICBcXFwiaXRlbVxcXCI6IHtcXG4gICAgICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIGl0ZW1MaXN0RWxlbWVudC5pdGVtICsgXCJcXFwiLFxcbiAgICAgICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGl0ZW1MaXN0RWxlbWVudC5uYW1lICsgXCJcXFwiXFxuICAgICAgICB9XFxuICAgICAgfVwiO1xuICB9KSArIFwiXFxuICAgICBdXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWJyZWFkY3J1bWJcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkUXVlc3Rpb25zID0gZnVuY3Rpb24gYnVpbGRRdWVzdGlvbnMobWFpbkVudGl0eSkge1xuICByZXR1cm4gXCJcXG4gIFwiICsgbWFpbkVudGl0eS5tYXAoZnVuY3Rpb24gKHF1ZXN0aW9uKSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJRdWVzdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBxdWVzdGlvbi5xdWVzdGlvbk5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImFjY2VwdGVkQW5zd2VyXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkFuc3dlclxcXCIsXFxuICAgICAgICBcXFwidGV4dFxcXCI6IFxcXCJcIiArIHF1ZXN0aW9uLmFjY2VwdGVkQW5zd2VyVGV4dCArIFwiXFxcIlxcbiAgICAgIH1cXG4gIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgRkFRUGFnZUpzb25MZCA9IGZ1bmN0aW9uIEZBUVBhZ2VKc29uTGQoX3JlZikge1xuICB2YXIgX3JlZiRtYWluRW50aXR5ID0gX3JlZi5tYWluRW50aXR5LFxuICAgICAgbWFpbkVudGl0eSA9IF9yZWYkbWFpbkVudGl0eSA9PT0gdm9pZCAwID8gW10gOiBfcmVmJG1haW5FbnRpdHk7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZy9cXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiRkFRUGFnZVxcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5XFxcIjogW1wiICsgYnVpbGRRdWVzdGlvbnMobWFpbkVudGl0eSkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtZmFxLXBhZ2VcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRCYXNlU2FsYXJ5ID0gZnVuY3Rpb24gYnVpbGRCYXNlU2FsYXJ5KGJhc2VTYWxhcnkpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYmFzZVNhbGFyeVxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk1vbmV0YXJ5QW1vdW50XFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeS5jdXJyZW5jeSA/IFwiXFxcImN1cnJlbmN5XFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS5jdXJyZW5jeSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ2YWx1ZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUXVhbnRpdGF0aXZlVmFsdWVcXFwiLFxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudmFsdWUgPyBcIlxcXCJ2YWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudW5pdFRleHQgPyBcIlxcXCJ1bml0VGV4dFxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudW5pdFRleHQgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgSm9iUG9zdGluZ0pzb25MZCA9IGZ1bmN0aW9uIEpvYlBvc3RpbmdKc29uTGQoX3JlZikge1xuICB2YXIgYmFzZVNhbGFyeSA9IF9yZWYuYmFzZVNhbGFyeSxcbiAgICAgIGRhdGVQb3N0ZWQgPSBfcmVmLmRhdGVQb3N0ZWQsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBlbXBsb3ltZW50VHlwZSA9IF9yZWYuZW1wbG95bWVudFR5cGUsXG4gICAgICBoaXJpbmdPcmdhbml6YXRpb24gPSBfcmVmLmhpcmluZ09yZ2FuaXphdGlvbixcbiAgICAgIGpvYkxvY2F0aW9uID0gX3JlZi5qb2JMb2NhdGlvbixcbiAgICAgIGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzID0gX3JlZi5hcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyxcbiAgICAgIGpvYkxvY2F0aW9uVHlwZSA9IF9yZWYuam9iTG9jYXRpb25UeXBlLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgdmFsaWRUaHJvdWdoID0gX3JlZi52YWxpZFRocm91Z2g7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJKb2JQb3N0aW5nXFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeSA/IGJ1aWxkQmFzZVNhbGFyeShiYXNlU2FsYXJ5KSA6ICcnKSArIFwiXFxuICAgIFxcXCJkYXRlUG9zdGVkXFxcIjogXFxcIlwiICsgZGF0ZVBvc3RlZCArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFwiICsgKGVtcGxveW1lbnRUeXBlID8gXCJcXFwiZW1wbG95bWVudFR5cGVcXFwiOiBcXFwiXCIgKyBlbXBsb3ltZW50VHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJoaXJpbmdPcmdhbml6YXRpb25cXFwiIDoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCIgOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCIgOiBcXFwiXCIgKyBoaXJpbmdPcmdhbml6YXRpb24ubmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIiA6IFxcXCJcIiArIGhpcmluZ09yZ2FuaXphdGlvbi5zYW1lQXMgKyBcIlxcXCJcXG4gICAgICBcIiArIChoaXJpbmdPcmdhbml6YXRpb24ubG9nbyA/IFwiLFxcXCJsb2dvXFxcIjogXFxcIlwiICsgaGlyaW5nT3JnYW5pemF0aW9uLmxvZ28gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH0sXFxuXFxuICAgIFxcXCJqb2JMb2NhdGlvblxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGxhY2VcXFwiLFxcbiAgICAgIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBvc3RhbEFkZHJlc3NcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NMb2NhbGl0eVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzUmVnaW9uXFxcIjogXFxcIlwiICsgam9iTG9jYXRpb24uYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcXG4gICAgICAgIFxcXCJwb3N0YWxDb2RlXFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLnBvc3RhbENvZGUgKyBcIlxcXCIsXFxuICAgICAgICBcXFwic3RyZWV0QWRkcmVzc1xcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcIiArIChhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyA/IFwiIFxcXCJhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50c1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDb3VudHJ5XFxcIixcXG4gICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgKyBcIlxcXCJcXG4gICAgfSxcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGpvYkxvY2F0aW9uVHlwZSA/IFwiXFxcImpvYkxvY2F0aW9uVHlwZVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uVHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHZhbGlkVGhyb3VnaCA/IFwiXFxcInZhbGlkVGhyb3VnaFxcXCI6IFxcXCJcIiArIHZhbGlkVGhyb3VnaCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ0aXRsZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWpvYlBvc3RpbmdcIlxuICB9KSk7XG59O1xuXG52YXIgQmxvZ0pzb25MZCA9IGZ1bmN0aW9uIEJsb2dKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkYXRlUHVibGlzaGVkID0gX3JlZi5kYXRlUHVibGlzaGVkLFxuICAgICAgX3JlZiRkYXRlTW9kaWZpZWQgPSBfcmVmLmRhdGVNb2RpZmllZCxcbiAgICAgIGRhdGVNb2RpZmllZCA9IF9yZWYkZGF0ZU1vZGlmaWVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlTW9kaWZpZWQsXG4gICAgICBhdXRob3JOYW1lID0gX3JlZi5hdXRob3JOYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQmxvZ1xcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5T2ZQYWdlXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJXZWJQYWdlXFxcIixcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJoZWFkbGluZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgXCIgKyBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGltYWdlICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF0sXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3JOYW1lICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWJsb2dcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIENvdXJzZUpzb25MZCA9IGZ1bmN0aW9uIENvdXJzZUpzb25MZChfcmVmKSB7XG4gIHZhciBrZXlPdmVycmlkZSA9IF9yZWYua2V5T3ZlcnJpZGUsXG4gICAgICBjb3Vyc2VOYW1lID0gX3JlZi5jb3Vyc2VOYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgcHJvdmlkZXJOYW1lID0gX3JlZi5wcm92aWRlck5hbWUsXG4gICAgICBwcm92aWRlclVybCA9IF9yZWYucHJvdmlkZXJVcmw7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDb3Vyc2VcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGNvdXJzZU5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwicHJvdmlkZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwcm92aWRlck5hbWUgKyBcIlxcXCJcIiArIChwcm92aWRlclVybCA/IFwiLFxcbiAgICAgIFxcXCJzYW1lQXNcXFwiOiBcXFwiXCIgKyBwcm92aWRlclVybCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gICAgfVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKG1pbmlmeUpzb25MZChqc2xvbmxkKSksXG4gICAga2V5OiBcImpzb25sZC1jb3Vyc2VcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIERhdGFzZXRKc29uTGQgPSBmdW5jdGlvbiBEYXRhc2V0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBsaWNlbnNlID0gX3JlZi5saWNlbnNlO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiRGF0YXNldFxcXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCJcIiArIChsaWNlbnNlID8gXCIsXFxuICAgICAgICBcXFwibGljZW5zZVxcXCI6IFxcXCJcIiArIGxpY2Vuc2UgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWRhdGFzZXRcIlxuICB9KSk7XG59O1xuXG52YXIgZm9ybWF0SWZBcnJheSA9IGZ1bmN0aW9uIGZvcm1hdElmQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gXCJbXCIgKyB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHZhbCArIFwiXFxcIlwiO1xuICB9KSArIFwiXVwiIDogXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiO1xufTtcblxudmFyIGJ1aWxkQWRkcmVzcyA9IChmdW5jdGlvbiAoYWRkcmVzcykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUG9zdGFsQWRkcmVzc1xcXCIsXFxuICAgIFxcXCJzdHJlZXRBZGRyZXNzXFxcIjogXFxcIlwiICsgYWRkcmVzcy5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICBcXFwiYWRkcmVzc0xvY2FsaXR5XFxcIjogXFxcIlwiICsgYWRkcmVzcy5hZGRyZXNzTG9jYWxpdHkgKyBcIlxcXCIsXFxuICAgIFwiICsgKGFkZHJlc3MuYWRkcmVzc1JlZ2lvbiA/IFwiXFxcImFkZHJlc3NSZWdpb25cXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NSZWdpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicG9zdGFsQ29kZVxcXCI6IFxcXCJcIiArIGFkZHJlc3MucG9zdGFsQ29kZSArIFwiXFxcIixcXG4gICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIjogXFxcIlwiICsgYWRkcmVzcy5hZGRyZXNzQ291bnRyeSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn0pO1xuXG52YXIgYnVpbGRHZW8gPSBmdW5jdGlvbiBidWlsZEdlbyhnZW8pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiZ2VvXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiR2VvQ29vcmRpbmF0ZXNcXFwiLFxcbiAgICBcXFwibGF0aXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW8ubGF0aXR1ZGUgKyBcIlxcXCIsXFxuICAgIFxcXCJsb25naXR1ZGVcXFwiOiBcXFwiXCIgKyBnZW8ubG9uZ2l0dWRlICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkUmF0aW5nID0gZnVuY3Rpb24gYnVpbGRSYXRpbmcocmF0aW5nKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFnZ3JlZ2F0ZVJhdGluZ1xcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZVJhdGluZ1xcXCIsXFxuICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIHJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIixcXG4gICAgXFxcInJhdGluZ0NvdW50XFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ0NvdW50ICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkT3BlbmluZ0hvdXJzID0gZnVuY3Rpb24gYnVpbGRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3BlbmluZ0hvdXJzU3BlY2lmaWNhdGlvblxcXCIsXFxuICAgIFwiICsgKG9wZW5pbmdIb3Vycy5kYXlPZldlZWsgPyBcIlxcXCJkYXlPZldlZWtcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkob3BlbmluZ0hvdXJzLmRheU9mV2VlaykgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJvcGVuc1xcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy5vcGVucyArIFwiXFxcIixcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLnZhbGlkRnJvbSA/IFwiXFxcInZhbGlkRnJvbVxcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy52YWxpZEZyb20gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMudmFsaWRUaHJvdWdoID8gXCJcXFwidmFsaWRUaHJvdWdoXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLnZhbGlkVGhyb3VnaCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJjbG9zZXNcXFwiOiBcXFwiXCIgKyBvcGVuaW5nSG91cnMuY2xvc2VzICsgXCJcXFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgTG9jYWxCdXNpbmVzc0pzb25MZCA9IGZ1bmN0aW9uIExvY2FsQnVzaW5lc3NKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIHRlbGVwaG9uZSA9IF9yZWYudGVsZXBob25lLFxuICAgICAgYWRkcmVzcyA9IF9yZWYuYWRkcmVzcyxcbiAgICAgIGdlbyA9IF9yZWYuZ2VvLFxuICAgICAgaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICByYXRpbmcgPSBfcmVmLnJhdGluZyxcbiAgICAgIHByaWNlUmFuZ2UgPSBfcmVmLnByaWNlUmFuZ2UsXG4gICAgICBzYW1lQXMgPSBfcmVmLnNhbWVBcyxcbiAgICAgIG9wZW5pbmdIb3VycyA9IF9yZWYub3BlbmluZ0hvdXJzO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiXCIgKyB0eXBlICsgXCJcXFwiLFxcbiAgICBcIiArIChpZCA/IFwiXFxcIkBpZFxcXCI6IFxcXCJcIiArIGlkICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoZGVzY3JpcHRpb24gPyBcIlxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodGVsZXBob25lID8gXCJcXFwidGVsZXBob25lXFxcIjogXFxcIlwiICsgdGVsZXBob25lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MoYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChnZW8gPyBcIlwiICsgYnVpbGRHZW8oZ2VvKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJhdGluZyA/IFwiXCIgKyBidWlsZFJhdGluZyhyYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJpY2VSYW5nZSA/IFwiXFxcInByaWNlUmFuZ2VcXFwiOiBcXFwiXCIgKyBwcmljZVJhbmdlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoaW1hZ2VzID8gXCJcXFwiaW1hZ2VcXFwiOlwiICsgZm9ybWF0SWZBcnJheShpbWFnZXMpICsgXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChzYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBbXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uICh1cmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB1cmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl0sXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMgPyBcIlxcXCJvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gXCJbXCIgKyBvcGVuaW5nSG91cnMubWFwKGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPcGVuaW5nSG91cnMoaG91cnMpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKG1pbmlmeUpzb25MZChqc2xvbmxkKSksXG4gICAga2V5OiBcImpzb25sZC1sb2NhbC1idXNpbmVzc1wiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgTG9nb0pzb25MZCA9IGZ1bmN0aW9uIExvZ29Kc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWxvZ29cIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkQnJhbmQgPSBmdW5jdGlvbiBidWlsZEJyYW5kKGJyYW5kKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImJyYW5kXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJUaGluZ1xcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBicmFuZCArIFwiXFxcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkUmV2aWV3UmF0aW5nID0gZnVuY3Rpb24gYnVpbGRSZXZpZXdSYXRpbmcocmF0aW5nKSB7XG4gIHJldHVybiByYXRpbmcgPyBcIlxcXCJyZXZpZXdSYXRpbmdcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSYXRpbmdcXFwiLFxcbiAgICAgICAgICBcIiArIChyYXRpbmcuYmVzdFJhdGluZyA/IFwiXFxcImJlc3RSYXRpbmdcXFwiOiBcXFwiXCIgKyByYXRpbmcuYmVzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFwiICsgKHJhdGluZy53b3JzdFJhdGluZyA/IFwiXFxcIndvcnN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLndvcnN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiXFxuICAgICAgICB9XCIgOiAnJztcbn07XG5cbnZhciBidWlsZEF1dGhvciA9IGZ1bmN0aW9uIGJ1aWxkQXV0aG9yKGF1dGhvcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgYXV0aG9yLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3IubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFB1Ymxpc2hlciA9IGZ1bmN0aW9uIGJ1aWxkUHVibGlzaGVyKHB1Ymxpc2hlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHVibGlzaGVyLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXIubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFJldmlld3MgPSBmdW5jdGlvbiBidWlsZFJldmlld3MocmV2aWV3cykge1xuICByZXR1cm4gXCJcXG5cXFwicmV2aWV3XFxcIjogW1xcbiAgXCIgKyByZXZpZXdzLm1hcChmdW5jdGlvbiAocmV2aWV3KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgIFwiICsgKHJldmlldy5hdXRob3IgPyBidWlsZEF1dGhvcihyZXZpZXcuYXV0aG9yKSA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnB1Ymxpc2hlciA/IGJ1aWxkUHVibGlzaGVyKHJldmlldy5wdWJsaXNoZXIpIDogJycpICsgXCJcXG4gICAgICBcIiArIChyZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyByZXZpZXcuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnJldmlld0JvZHkgPyBcIlxcXCJyZXZpZXdCb2R5XFxcIjogXFxcIlwiICsgcmV2aWV3LnJldmlld0JvZHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKHJldmlldy5uYW1lID8gXCJcXFwibmFtZVxcXCI6IFxcXCJcIiArIHJldmlldy5uYW1lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcIiArIGJ1aWxkUmV2aWV3UmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gIH1cIjtcbiAgfSkgKyBcIl0sXCI7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmcgPSBmdW5jdGlvbiBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVSYXRpbmdcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIixcXG4gICAgICBcXFwicmV2aWV3Q291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07IC8vIFRPRE86IERvY3MgZm9yIG9mZmVycyBpdGVtQ29uZGl0aW9uICYgYXZhaWxhYmlsaXR5XG4vLyBUT0RPOiBTZWxsZXIgdHlwZSwgbWFrZSBkeW5hbWljXG5cblxudmFyIGJ1aWxkT2ZmZXJzID0gZnVuY3Rpb24gYnVpbGRPZmZlcnMob2ZmZXJzKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT2ZmZXJcXFwiLFxcbiAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIG9mZmVycy5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlcnMucHJpY2VWYWxpZFVudGlsID8gXCJcXFwicHJpY2VWYWxpZFVudGlsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnByaWNlVmFsaWRVbnRpbCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5pdGVtQ29uZGl0aW9uID8gXCJcXFwiaXRlbUNvbmRpdGlvblxcXCI6IFxcXCJcIiArIG9mZmVycy5pdGVtQ29uZGl0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzLmF2YWlsYWJpbGl0eSA/IFwiXFxcImF2YWlsYWJpbGl0eVxcXCI6IFxcXCJcIiArIG9mZmVycy5hdmFpbGFiaWxpdHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMudXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5zZWxsZXIgPyBcIlxcbiAgICAgIFxcXCJzZWxsZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBvZmZlcnMuc2VsbGVyLm5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlcnMucHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBidWlsZEFnZ3JlZ2F0ZU9mZmVyID0gZnVuY3Rpb24gYnVpbGRBZ2dyZWdhdGVPZmZlcihvZmZlcikge1xuICByZXR1cm4gXCJcXG4gIHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZU9mZmVyXFxcIixcXG4gICAgXFxcInByaWNlQ3VycmVuY3lcXFwiOiBcXFwiXCIgKyBvZmZlci5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlci5oaWdoUHJpY2UgPyBcIlxcXCJoaWdoUHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlci5oaWdoUHJpY2UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlci5vZmZlckNvdW50ID8gXCJcXFwib2ZmZXJDb3VudFxcXCI6IFxcXCJcIiArIG9mZmVyLm9mZmVyQ291bnQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcXFwibG93UHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlci5sb3dQcmljZSArIFwiXFxcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIFByb2R1Y3RKc29uTGQgPSBmdW5jdGlvbiBQcm9kdWN0SnNvbkxkKF9yZWYpIHtcbiAgdmFyIGtleU92ZXJyaWRlID0gX3JlZi5rZXlPdmVycmlkZSxcbiAgICAgIHByb2R1Y3ROYW1lID0gX3JlZi5wcm9kdWN0TmFtZSxcbiAgICAgIF9yZWYkaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICBpbWFnZXMgPSBfcmVmJGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGltYWdlcyxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHNrdSA9IF9yZWYuc2t1LFxuICAgICAgZ3RpbjggPSBfcmVmLmd0aW44LFxuICAgICAgZ3RpbjEzID0gX3JlZi5ndGluMTMsXG4gICAgICBndGluMTQgPSBfcmVmLmd0aW4xNCxcbiAgICAgIG1wbiA9IF9yZWYubXBuLFxuICAgICAgYnJhbmQgPSBfcmVmLmJyYW5kLFxuICAgICAgX3JlZiRyZXZpZXdzID0gX3JlZi5yZXZpZXdzLFxuICAgICAgcmV2aWV3cyA9IF9yZWYkcmV2aWV3cyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHJldmlld3MsXG4gICAgICBhZ2dyZWdhdGVSYXRpbmcgPSBfcmVmLmFnZ3JlZ2F0ZVJhdGluZyxcbiAgICAgIG9mZmVycyA9IF9yZWYub2ZmZXJzLFxuICAgICAgYWdncmVnYXRlT2ZmZXIgPSBfcmVmLmFnZ3JlZ2F0ZU9mZmVyO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlByb2R1Y3RcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOlwiICsgZm9ybWF0SWZBcnJheShpbWFnZXMpICsgXCIsXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG1wbiA/IFwiXFxcIm1wblxcXCI6IFxcXCJcIiArIG1wbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHNrdSA/IFwiXFxcInNrdVxcXCI6IFxcXCJcIiArIHNrdSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW44ID8gXCJcXFwiZ3RpbjhcXFwiOiBcXFwiXCIgKyBndGluOCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW4xMyA/IFwiXFxcImd0aW4xM1xcXCI6IFxcXCJcIiArIGd0aW4xMyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGd0aW4xNCA/IFwiXFxcImd0aW4xNFxcXCI6IFxcXCJcIiArIGd0aW4xNCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGJyYW5kID8gYnVpbGRCcmFuZChicmFuZCkgOiAnJykgKyBcIlxcbiAgICBcIiArIChyZXZpZXdzLmxlbmd0aCA/IGJ1aWxkUmV2aWV3cyhyZXZpZXdzKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZyA/IGJ1aWxkQWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMgPyBcIlxcXCJvZmZlcnNcXFwiOiBcIiArIChBcnJheS5pc0FycmF5KG9mZmVycykgPyBcIltcIiArIG9mZmVycy5tYXAoZnVuY3Rpb24gKG9mZmVyKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBidWlsZE9mZmVycyhvZmZlcik7XG4gIH0pICsgXCJdXCIgOiBidWlsZE9mZmVycyhvZmZlcnMpKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAoYWdncmVnYXRlT2ZmZXIgJiYgIW9mZmVycyA/IFwiXFxcIm9mZmVyc1xcXCI6IFwiICsgYnVpbGRBZ2dyZWdhdGVPZmZlcihhZ2dyZWdhdGVPZmZlcikgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvZHVjdE5hbWUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtcHJvZHVjdFwiICsgKGtleU92ZXJyaWRlID8gXCItXCIgKyBrZXlPdmVycmlkZSA6ICcnKVxuICB9KSk7XG59O1xuXG52YXIgU29jaWFsUHJvZmlsZUpzb25MZCA9IGZ1bmN0aW9uIFNvY2lhbFByb2ZpbGVKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkc2FtZUFzID0gX3JlZi5zYW1lQXMsXG4gICAgICBzYW1lQXMgPSBfcmVmJHNhbWVBcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHNhbWVBcztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgdHlwZSArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwic2FtZUFzXFxcIjogW1xcbiAgICAgIFwiICsgc2FtZUFzLm1hcChmdW5jdGlvbiAoc29jaWFsVXJsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgc29jaWFsVXJsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtc29jaWFsXCIgKyAoa2V5T3ZlcnJpZGUgPyBcIi1cIiArIGtleU92ZXJyaWRlIDogJycpXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5JDEgPSBmdW5jdGlvbiBmb3JtYXRJZkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiW1wiICsgdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl1cIiA6IFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcbn07XG5cbnZhciBidWlsZENvbnRhY3RQb2ludCA9IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICByZXR1cm4gY29udGFjdFBvaW50Lm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIHJldHVybiBcIntcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvbnRhY3RQb2ludFxcXCIsXFxuICAgIFxcXCJ0ZWxlcGhvbmVcXFwiOiBcXFwiXCIgKyBjb250YWN0LnRlbGVwaG9uZSArIFwiXFxcIixcXG4gICAgXFxcImNvbnRhY3RUeXBlXFxcIjogXFxcIlwiICsgY29udGFjdC5jb250YWN0VHlwZSArIFwiXFxcIlwiICsgKGNvbnRhY3QuYXJlYVNlcnZlZCA/IFwiLFxcbiAgICBcXFwiYXJlYVNlcnZlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSQxKGNvbnRhY3QuYXJlYVNlcnZlZCkgOiAnJykgKyAoY29udGFjdC5hdmFpbGFibGVMYW5ndWFnZSA/IFwiLFxcbiAgICBcXFwiYXZhaWxhYmxlTGFuZ3VhZ2VcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkkMShjb250YWN0LmF2YWlsYWJsZUxhbmd1YWdlKSA6ICcnKSArIChjb250YWN0LmNvbnRhY3RPcHRpb24gPyBcIixcXG4gICAgXFxcImNvbnRhY3RPcHRpb25cXFwiOiBcXFwiXCIgKyBjb250YWN0LmNvbnRhY3RPcHRpb24gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgQ29ycG9yYXRlQ29udGFjdEpzb25MZCA9IGZ1bmN0aW9uIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvLFxuICAgICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXCIgKyAobG9nbyA/IFwiXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNvbnRhY3RQb2ludFxcXCI6IFtcIiArIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtY29ycG9yYXRlLWNvbnRhY3RcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIE5ld3NBcnRpY2xlSnNvbkxkID0gZnVuY3Rpb24gTmV3c0FydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIga2V5T3ZlcnJpZGUgPSBfcmVmLmtleU92ZXJyaWRlLFxuICAgICAgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBzZWN0aW9uID0gX3JlZi5zZWN0aW9uLFxuICAgICAga2V5d29yZHMgPSBfcmVmLmtleXdvcmRzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZUNyZWF0ZWQgPSBfcmVmLmRhdGVDcmVhdGVkLFxuICAgICAgZGF0ZUNyZWF0ZWQgPSBfcmVmJGRhdGVDcmVhdGVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlQ3JlYXRlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGJvZHkgPSBfcmVmLmJvZHksXG4gICAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgICAgcHVibGlzaGVyTG9nbyA9IF9yZWYucHVibGlzaGVyTG9nbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk5ld3NBcnRpY2xlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlPZlBhZ2VcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlBhZ2VcXFwiLFxcbiAgICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImhlYWRsaW5lXFxcIjogXFxcIlwiICsgdGl0bGUgKyBcIlxcXCIsXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXSxcXG4gICAgXFxcImFydGljbGVTZWN0aW9uXFxcIjpcXFwiXCIgKyBzZWN0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBrZXl3b3JkcyArIFwiXFxcIixcXG4gICAgXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyBkYXRlUHVibGlzaGVkICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZUNyZWF0ZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZUNyZWF0ZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwicHVibGlzaGVyXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHVibGlzaGVyTmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwibG9nb1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJJbWFnZU9iamVjdFxcXCIsXFxuICAgICAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgcHVibGlzaGVyTG9nbyArIFwiXFxcIlxcbiAgICAgIH1cXG4gICAgfSxcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJhcnRpY2xlQm9keVxcXCI6IFxcXCJcIiArIGJvZHkgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtbmV3c2FydGljbGVcIiArIChrZXlPdmVycmlkZSA/IFwiLVwiICsga2V5T3ZlcnJpZGUgOiAnJylcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkTG9jYXRpb24gPSBmdW5jdGlvbiBidWlsZExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImxvY2F0aW9uXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGxhY2VcXFwiLFxcbiAgICBcIiArIGJ1aWxkQWRkcmVzcyhsb2NhdGlvbi5hZGRyZXNzKSArIFwiXFxuICAgIFwiICsgKGxvY2F0aW9uLnNhbWVBcyA/IFwiXFxcInNhbWVBc1xcXCI6IFxcXCJcIiArIGxvY2F0aW9uLnNhbWVBcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBsb2NhdGlvbi5uYW1lICsgXCJcXFwiXFxuICB9LFxcblwiO1xufTtcblxudmFyIEV2ZW50SnNvbkxkID0gZnVuY3Rpb24gRXZlbnRKc29uTGQoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIHN0YXJ0RGF0ZSA9IF9yZWYuc3RhcnREYXRlLFxuICAgICAgZW5kRGF0ZSA9IF9yZWYuZW5kRGF0ZSxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgaW1hZ2VzID0gX3JlZi5pbWFnZXM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJFdmVudFxcXCIsXFxuICAgIFxcXCJzdGFydERhdGVcXFwiOiBcXFwiXCIgKyBzdGFydERhdGUgKyBcIlxcXCIsXFxuICAgIFxcXCJlbmREYXRlXFxcIjogXFxcIlwiICsgZW5kRGF0ZSArIFwiXFxcIixcXG4gICAgXCIgKyBidWlsZExvY2F0aW9uKGxvY2F0aW9uKSArIFwiXFxuICAgIFwiICsgKGltYWdlcyA/IFwiXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh1cmwgPyBcIlxcXCJ1cmxcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGRlc2NyaXB0aW9uID8gXCJcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAobWluaWZ5SnNvbkxkKGpzbG9ubGQpKSxcbiAgICBrZXk6IFwianNvbmxkLWV2ZW50XCJcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkQWdncmVnYXRlUmF0aW5nJDEgPSBmdW5jdGlvbiBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVSYXRpbmdcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIixcXG4gICAgICBcXFwicmF0aW5nQ291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmF0aW5nQ291bnQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZEluc3RydWN0aW9uID0gZnVuY3Rpb24gYnVpbGRJbnN0cnVjdGlvbihpbnN0cnVjdGlvbikge1xuICByZXR1cm4gXCJ7XFxuICBcXFwiQHR5cGVcXFwiOiBcXFwiSG93VG9TdGVwXFxcIixcXG4gIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaW5zdHJ1Y3Rpb24ubmFtZSArIFwiXFxcIixcXG4gIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgaW5zdHJ1Y3Rpb24udGV4dCArIFwiXFxcIixcXG4gIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi51cmwgKyBcIlxcXCIsXFxuICBcXFwiaW1hZ2VcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi5pbWFnZSArIFwiXFxcIlxcbn1cIjtcbn07XG5cbnZhciBidWlsZEludGVyYWN0aW9uU3RhdGlzdGljID0gZnVuY3Rpb24gYnVpbGRJbnRlcmFjdGlvblN0YXRpc3RpYyh3YXRjaENvdW50KSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImludGVyYWN0aW9uU3RhdGlzdGljXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW50ZXJhY3Rpb25Db3VudGVyXFxcIixcXG4gICAgXFxcImludGVyYWN0aW9uVHlwZVxcXCI6IHsgXFxcIkB0eXBlXFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnL1dhdGNoQWN0aW9uXFxcIiB9LFxcbiAgICBcXFwidXNlckludGVyYWN0aW9uQ291bnRcXFwiOiBcIiArIHdhdGNoQ291bnQgKyBcIlxcbiAgfVxcblwiO1xufTtcblxudmFyIGJ1aWxkVmlkZW8gPSBmdW5jdGlvbiBidWlsZFZpZGVvKHZpZGVvKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcInZpZGVvXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJWaWRlb09iamVjdFxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyB2aWRlby5uYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJ0aHVtYm5haWxVcmxcXFwiOiBbXFxuICAgICAgICBcIiArICh2aWRlby50aHVtYm5haWxVcmxzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKHRodW1ibmFpbFVybCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIHRodW1ibmFpbFVybCArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICAgICBdLFxcbiAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIHZpZGVvLmRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICAgIFxcXCJjb250ZW50VXJsXFxcIjogXFxcIlwiICsgdmlkZW8uY29udGVudFVybCArIFwiXFxcIixcXG4gICAgICBcXFwidXBsb2FkRGF0ZVxcXCI6IFxcXCJcIiArIHZpZGVvLnVwbG9hZERhdGUgKyBcIlxcXCIsXFxuICAgICAgXFxcImR1cmF0aW9uXFxcIjogXFxcIlwiICsgdmlkZW8uZHVyYXRpb24gKyBcIlxcXCIsXFxuICAgICAgXCIgKyAodmlkZW8uZW1iZWRVcmwgPyBcIlxcXCJlbWJlZFVybFxcXCI6IFxcXCJcIiArIHZpZGVvLmVtYmVkVXJsICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgIFwiICsgKHZpZGVvLmV4cGlyZXMgPyBcIlxcXCJleHBpcmVzXFxcIjogXFxcIlwiICsgdmlkZW8uZXhwaXJlcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgICBcIiArICh2aWRlby53YXRjaENvdW50ID8gYnVpbGRJbnRlcmFjdGlvblN0YXRpc3RpYyh2aWRlby53YXRjaENvdW50KSA6IFwiXCIpICsgXCJcXG4gICAgfSxcXG5cIjtcbn07XG5cbnZhciBSZWNpcGVKc29uTGQgPSBmdW5jdGlvbiBSZWNpcGVKc29uTGQoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGF1dGhvck5hbWUgPSBfcmVmLmF1dGhvck5hbWUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkYXRlUHVibGlzaGVkID0gX3JlZi5kYXRlUHVibGlzaGVkLFxuICAgICAgcHJlcFRpbWUgPSBfcmVmLnByZXBUaW1lLFxuICAgICAgY29va1RpbWUgPSBfcmVmLmNvb2tUaW1lLFxuICAgICAgdG90YWxUaW1lID0gX3JlZi50b3RhbFRpbWUsXG4gICAgICBrZXl3b3JkcyA9IF9yZWYua2V5d29yZHMsXG4gICAgICB5aWVsZHMgPSBfcmVmLnlpZWxkcyxcbiAgICAgIGNhdGVnb3J5ID0gX3JlZi5jYXRlZ29yeSxcbiAgICAgIGN1aXNpbmUgPSBfcmVmLmN1aXNpbmUsXG4gICAgICBjYWxvcmllcyA9IF9yZWYuY2Fsb3JpZXMsXG4gICAgICBpbmdyZWRpZW50cyA9IF9yZWYuaW5ncmVkaWVudHMsXG4gICAgICBpbnN0cnVjdGlvbnMgPSBfcmVmLmluc3RydWN0aW9ucyxcbiAgICAgIGFnZ3JlZ2F0ZVJhdGluZyA9IF9yZWYuYWdncmVnYXRlUmF0aW5nLFxuICAgICAgdmlkZW8gPSBfcmVmLnZpZGVvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cHM6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZWNpcGVcXFwiLFxcbiAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIG5hbWUgKyBcIlxcXCIsXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3JOYW1lICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkuam9pbignLCcpICsgXCJcXG4gICAgXSxcXG4gICAgXCIgKyAocHJlcFRpbWUgPyBcIlxcXCJwcmVwVGltZVxcXCI6IFxcXCJcIiArIHByZXBUaW1lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjb29rVGltZSA/IFwiXFxcImNvb2tUaW1lXFxcIjogXFxcIlwiICsgY29va1RpbWUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKHRvdGFsVGltZSA/IFwiXFxcInRvdGFsVGltZVxcXCI6IFxcXCJcIiArIHRvdGFsVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoa2V5d29yZHMgPyBcIlxcXCJrZXl3b3Jkc1xcXCI6IFxcXCJcIiArIGtleXdvcmRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArICh5aWVsZHMgPyBcIlxcXCJyZWNpcGVZaWVsZFxcXCI6IFxcXCJcIiArIHlpZWxkcyArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY2F0ZWdvcnkgPyBcIlxcXCJyZWNpcGVDYXRlZ29yeVxcXCI6IFxcXCJcIiArIGNhdGVnb3J5ICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjdWlzaW5lID8gXCJcXFwicmVjaXBlQ3Vpc2luZVxcXCI6IFxcXCJcIiArIGN1aXNpbmUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGNhbG9yaWVzID8gXCJcXFwibnV0cml0aW9uXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiTnV0cml0aW9uSW5mb3JtYXRpb25cXFwiLCBcXFwiY2Fsb3JpZXNcXFwiOiBcXFwiXCIgKyBjYWxvcmllcyArIFwiIGNhbG9yaWVzXFxcIiB9LFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcgPyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyQxKGFnZ3JlZ2F0ZVJhdGluZykgOiAnJykgKyBcIlxcbiAgICBcIiArICh2aWRlbyA/IGJ1aWxkVmlkZW8odmlkZW8pIDogJycpICsgXCJcXG4gICAgXFxcInJlY2lwZUluZ3JlZGllbnRcXFwiOiBbXFxuICAgICAgXCIgKyBpbmdyZWRpZW50cy5tYXAoZnVuY3Rpb24gKGluZ3JlZGllbnQpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbmdyZWRpZW50ICsgXCJcXFwiXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiXFxuICAgIF0sXFxuICAgIFxcXCJyZWNpcGVJbnN0cnVjdGlvbnNcXFwiOiBbXFxuICAgICAgXCIgKyBpbnN0cnVjdGlvbnMubWFwKGJ1aWxkSW5zdHJ1Y3Rpb24pLmpvaW4oJywnKSArIFwiXFxuICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChtaW5pZnlKc29uTGQoanNsb25sZCkpLFxuICAgIGtleTogXCJqc29ubGQtcmVjaXBlXCJcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgQXJ0aWNsZUpzb25MZCwgQmxvZ0pzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDb3Jwb3JhdGVDb250YWN0SnNvbkxkLCBDb3Vyc2VKc29uTGQsIERhdGFzZXRKc29uTGQsIF9kZWZhdWx0IGFzIERlZmF1bHRTZW8sIEV2ZW50SnNvbkxkLCBGQVFQYWdlSnNvbkxkLCBKb2JQb3N0aW5nSnNvbkxkLCBMb2NhbEJ1c2luZXNzSnNvbkxkLCBMb2dvSnNvbkxkLCBOZXdzQXJ0aWNsZUpzb25MZCwgX2RlZmF1bHQkMSBhcyBOZXh0U2VvLCBQcm9kdWN0SnNvbkxkLCBSZWNpcGVKc29uTGQsIFNvY2lhbFByb2ZpbGVKc29uTGQgfTtcbiIsIi8qKlxuICogU0VPIGNvbXBvbmVudCB0aGF0IHF1ZXJpZXMgZm9yIGRhdGEgd2l0aFxuICogIEdhdHNieSdzIHVzZVN0YXRpY1F1ZXJ5IFJlYWN0IGhvb2tcbiAqXG4gKiBTZWU6IGh0dHBzOi8vd3d3LmdhdHNieWpzLm9yZy9kb2NzL3VzZS1zdGF0aWMtcXVlcnkvXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdXNlU2l0ZU1ldGFkYXRhIGZyb20gXCIuLi9ob29rcy9zaXRlbWV0YWRhdGFcIlxuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuXG50eXBlIFNFT1Byb3BzID0ge1xuICB0aXRsZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IHN0cmluZ1xuICBwYXRoPzogc3RyaW5nXG4gIGxhbmc/OiBzdHJpbmdcbiAgaW5kZXg/OiBib29sZWFuXG59XG5cbmNvbnN0IFNFTzogUmVhY3QuRkM8U0VPUHJvcHM+ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwYXRoLCBsYW5nLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzaXRlVGl0bGUsXG4gICAgc2l0ZURlc2NyaXB0aW9uLFxuICAgIHNpdGVVcmwsXG4gICAgYXV0aG9yLFxuICAgIGtleXdvcmRzLFxuICB9ID0gdXNlU2l0ZU1ldGFkYXRhKClcblxuICBjb25zdCBtZXRhVGl0bGUgPSB0aXRsZSAhPT0gXCJcIiA/IGAke3RpdGxlfSB8ICR7c2l0ZVRpdGxlfWAgOiBzaXRlVGl0bGVcbiAgY29uc3QgbWV0YURlc2NyaXB0aW9uID1cbiAgICBkZXNjcmlwdGlvbiAhPT0gXCJcIiA/IGRlc2NyaXB0aW9uIDogdGl0bGUgPT0gXCJIb21lXCIgPyBzaXRlRGVzY3JpcHRpb24gOiBcIlwiXG4gIGNvbnN0IHVybCA9IGAke3NpdGVVcmx9JHtwYXRofWBcblxuICByZXR1cm4gKFxuICAgIC8vIDxHYXRzYnlTZW9cbiAgICAvLyAgIHRpdGxlPXttZXRhVGl0bGV9XG4gICAgLy8gICBkZXNjcmlwdGlvbj17bWV0YURlc2NyaXB0aW9ufVxuICAgIC8vICAgY2Fub25pY2FsPXt1cmx9XG4gICAgLy8gICBub2luZGV4PXshaW5kZXh9XG4gICAgLy8gICBub2ZvbGxvdz17IWluZGV4fVxuICAgIC8vICAgbGFuZ3VhZ2U9XCJlbl9VU1wiXG4gICAgLy8gICBtZXRhVGFncz17W1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxuICAgIC8vICAgICAgIGNvbnRlbnQ6IGtleXdvcmRzLmpvaW4oXCIsIFwiKSxcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgIF19XG4gICAgLy8gICBvcGVuR3JhcGg9e3tcbiAgICAvLyAgICAgdXJsOiB1cmwsXG4gICAgLy8gICAgIHRpdGxlOiBtZXRhVGl0bGUsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBtZXRhRGVzY3JpcHRpb24sXG4gICAgLy8gICAgIGxvY2FsZTogXCJlbl9VU1wiLFxuICAgIC8vICAgICBzaXRlX25hbWU6IHNpdGVUaXRsZSxcbiAgICAvLyAgICAgdHlwZTogXCJ3ZWJzaXRlXCIsXG4gICAgLy8gICB9fVxuICAgIC8vIC8+XG5cbiAgICA8TmV4dFNlb1xuICAgICAgdGl0bGU9e21ldGFUaXRsZX1cbiAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY3JpcHRpb259XG4gICAgICBjYW5vbmljYWw9e3VybH1cbiAgICAgIG5vaW5kZXg9eyFpbmRleH1cbiAgICAgIG5vZm9sbG93PXshaW5kZXh9XG4gICAgICBhZGRpdGlvbmFsTWV0YVRhZ3M9e1tcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwia2V5d29yZHNcIixcbiAgICAgICAgICBjb250ZW50OiBrZXl3b3Jkcy5qb2luKFwiLCBcIiksXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0aXRsZTogbWV0YVRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogbWV0YURlc2NyaXB0aW9uLFxuICAgICAgICBsb2NhbGU6IFwiZW5fVVNcIixcbiAgICAgICAgc2l0ZV9uYW1lOiBzaXRlVGl0bGUsXG4gICAgICAgIHR5cGU6IFwid2Vic2l0ZVwiLFxuICAgICAgfX1cbiAgICAvPlxuXG4gICAgLypcbiAgICA8SGVsbWV0XG4gICAgICBodG1sQXR0cmlidXRlcz17e1xuICAgICAgICBsYW5nLFxuICAgICAgfX1cbiAgICAgIHRpdGxlPXttZXRhVGl0bGV9XG4gICAgICBtZXRhPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogYG9nOnNpdGVfdGl0bGVgLFxuICAgICAgICAgIGNvbnRlbnQ6IHNpdGVUaXRsZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXG4gICAgICAgICAgY29udGVudDogbWV0YURlc2NyaXB0aW9uLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYGF1dGhvcmAsXG4gICAgICAgICAgY29udGVudDogYXV0aG9yLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJrZXl3b3Jkc1wiLFxuICAgICAgICAgIGNvbnRlbnQ6IGtleXdvcmRzLmpvaW4oXCIsIFwiKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwicm9ib3RzXCIsXG4gICAgICAgICAgY29udGVudDogXCJhbGwsIGluZGV4LCBmb2xsb3dcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxuICAgICAgICAgIGNvbnRlbnQ6IG1ldGFUaXRsZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgICAgIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6dXJsYCxcbiAgICAgICAgICBjb250ZW50OiB1cmwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogYG9nOmVtYWlsYCxcbiAgICAgICAgICBjb250ZW50OiBlbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvcGVydHk6IGBvZzpsb2NhbGVgLFxuICAgICAgICAgIGNvbnRlbnQ6IGBlbl9VU2AsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgb2c6bG9jYWxpdHlgLFxuICAgICAgICAgIGNvbnRlbnQ6IGBOZXcgWW9yayBDaXR5YCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IGBvZzpyZWdpb25gLFxuICAgICAgICAgIGNvbnRlbnQ6IGBOWWAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgb2c6cG9zdGFsLWNvZGVgLFxuICAgICAgICAgIGNvbnRlbnQ6IGAxMDAzMmAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBgb2c6Y291bnRyeS1uYW1lYCxcbiAgICAgICAgICBjb250ZW50OiBgVVNBYCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxuICAgICAgICAvLyAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxuICAgICAgICAvLyAgIGNvbnRlbnQ6IGF1dGhvcixcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcbiAgICAgICAgLy8gICBjb250ZW50OiB0aXRsZSxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcbiAgICAgICAgLy8gICBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24sXG4gICAgICAgIC8vIH0sXG4gICAgICBdfVxuICAgIC8+XG4gICAgKi9cbiAgKVxufVxuXG5TRU8uZGVmYXVsdFByb3BzID0ge1xuICBsYW5nOiBcImVuXCIsXG4gIHRpdGxlOiBcIlwiLFxuICBkZXNjcmlwdGlvbjogXCJcIixcbiAgcGF0aDogXCJcIixcbiAgaW5kZXg6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNFT1xuIl0sInNvdXJjZVJvb3QiOiIifQ==