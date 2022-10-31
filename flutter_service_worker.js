'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "b87432db78c4ef7cbb6b59aa1872a3f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2bb14605078d89ddffbb6998f9cbacc2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0adf96885ef9f6e719d31114c600f6c",
".git/logs/refs/heads/main": "04bcd0d3be7d567c5aaab4705c25430d",
".git/logs/refs/remotes/origin/main": "b5a9194de49d1c0212b6e54a70c9931b",
".git/objects/03/25a20d30414eee9f51f21c7c86f1261ba3bcbc": "ff8ecdaae4d33efc80497bc7dc0a87e0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/efbbca141e0c09aadd43cea36a1a7372e1ea9b": "ec76b7a417651af9e928acbd483f2aaa",
".git/objects/0c/4157a2a19f913fb55066de037259ea2d0fa61d": "c268dbc7a122496ecccc03d1d9a9e6d6",
".git/objects/0c/982db598ee71f2a6e5289e10ee7af665a8ba01": "56cbbae1ff28c3af553f5e2ffed608fd",
".git/objects/0f/76b0e808237ecd1ca9794a640120dc278045cf": "d08f3a63d38cafe045055ab2938489e0",
".git/objects/10/fa32968fe8318d760b9029820dbdfe70bfd689": "0875da6973548805fbbeb79feb2cd0eb",
".git/objects/19/9303371c766e1fc8a8d0ed87e7d76813f151c4": "f5f88a49e798875adbd185070ebdf625",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/ba325304e1acf17da82bdedb937ef8b345eeb1": "6a47e8663752f3fcd2c756387fafe0a0",
".git/objects/24/a2db725469cac1bd341f92d2990bc068f8afad": "ee1951ebca6ddecd8d8f085e17e61f54",
".git/objects/2a/cedf0286916e53f597c3b554ff370b22b53f0a": "386cc032bfa7f3b4014651c5d5f280d0",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/36/12108d0d4b5704b9679c28d7b98ba6fd40c7be": "6cee4e29c5f914e5ba85fdd8f7af6ca7",
".git/objects/37/81fa7b9f995692348641e1a576a5569db88e7e": "8cd67f19615980aba8ad9d684a8b9e68",
".git/objects/3d/e772060f1bbaecaff7562e68a9a72229fd34ef": "58ce76c41d3dce58ab8c799c447b3cda",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/2f3afe5d972a48b5d11091c3428407cac82cb3": "0fd780855ef2d30f11d5910572cc8275",
".git/objects/45/2796d6c7676c9644f0147ed04c05ab9dfc7636": "e48f8a873a3313ca8e978758c16235c7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/68/222bea67b6615deb7a4cd8d209118fb83cad17": "7b031157060693aeddd4573289f45a02",
".git/objects/69/2a4f91d4653ca4d9dc21f0a946a601cd721b4c": "c73bda6e568132f0388ce996473af11f",
".git/objects/74/02c668f6feeb5430cc7dc429ad1a333af37dfb": "bce10e574d31eee6d5e7f40bc94d42dc",
".git/objects/75/da05e3290e19815e1d1da8d9716dfa055ec733": "3a61ebb5a4190f3954fc037f23aea846",
".git/objects/78/bef5659779b4221d1b1d24ca30286d9e1220f0": "497f340dc45035bfa4bd6e1602edaba7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/6dde1b7df783f9939bc747a78a164208aa9903": "2d549216dbca5762f71451c41f548b5c",
".git/objects/7a/9b206bc05d2c5ef8d641b13a81cce3e6dfc4a2": "845aa9bd8bb90a97649f7c055d5b6b8d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/85/133033c746945fc332c0c478819224f15ba6f6": "406963136ccd43866df6528716ab87e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/14c532d1d162dd2bb53d7d79ae0299c2b950e1": "09e17f03f53dc20fab2594c5a0f2fb25",
".git/objects/97/84e253471509de88f07985568e8607dbb7bd02": "ce8f98aeaffab6237e445d19a2bc493f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/ec960e3bb1bdc5a131869448c73c20838d0e0f": "2977dbc8fc7464187209fb1c91b34e62",
".git/objects/a9/4429b813b52d9ca0702c68cd429a83c2ea366c": "315453be195143dc84a07991adb8058f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/f18d07bd78a311cf1c17de42ef9def7e32164f": "c79951dd77f7410705ba185adfe198a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/769954ec604b591d4456e150670510865f8fdf": "89337d17ea18c7638365dc90a457401b",
".git/objects/b9/03f178d1f3ec1e1c80065ba8a693b1d13b93c2": "fedc01d4f5dc2bfb0ef782ccaeef4a86",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7cd90cbbe2c69b2d1a45874e8075471f1f745f": "1ee96b3c783a5f685e839f8419d51407",
".git/objects/bf/64246e0e8af19585c9b1370f9252f352e97510": "b42c76860a2bce4f666a2873fa80246e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/05066e3f36b23719d0a8d5add6af7a1905a741": "b3d15802af001846d39ef28473e20175",
".git/objects/d8/30c55435bfe39a19c3f1b15247b7ab3a53e0fd": "89fa7bea525ab01f16311c628353ea2e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/4494ccd68e12856dd78f3173cbf7c7f4a919a9": "103326989f4e4ef3ad5d59fa199883f5",
".git/objects/e6/6abe97f9b3c965eb50571961fd2a9bb97a532b": "650baa097a5c38de0b182725c3c1578a",
".git/objects/ea/e688fb5797dde06836d0cb470c3a2828f729ff": "750efac984d4780bd62bd7537fffbe2e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/2c9b985b8110e6adf188f36866be72b7c8eaf5": "e7181e360ff2034a5cd4c51d61a58e99",
".git/refs/heads/main": "49473fc067fdbae1d3843003f74ae601",
".git/refs/remotes/origin/main": "49473fc067fdbae1d3843003f74ae601",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "014e88b809be7f6c7541fa42a3519d9c",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d16808e27c478bf303b0abcc3ffcde9",
"/": "2d16808e27c478bf303b0abcc3ffcde9",
"main.dart.js": "e40f54fcef51749b74466c6f6e911eb8",
"manifest.json": "177e45a87567c39c8a134cc208cba1d1",
"script.js": "e6b1a069943a1ee476cfecc982cd46e7",
"version.json": "1920f886d6b16dd7830af5a570489200"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
