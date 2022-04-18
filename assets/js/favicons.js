// vars --------------------

// let nextAddSearchFavicon;



// functions --------------------

async function init() {
  addSearchFavicons();
}

async function addSearchFavicons() {
  try {
    if (document.hidden) return;

    // let addedFavicons = 0;

    document.querySelectorAll('#center_col .g:not(.g-blk)').forEach((el) => {
      const linkEl = el.querySelector('a');
      if (!linkEl || el.querySelector('.favicon')) return;

      // addedFavicons++;

			if (!el.querySelector('.apinix-favicon')) {
				const favicon = document.createElement('img');
				favicon.src = getUrl(linkEl.origin);
				favicon.className = 'apinix-favicon';

				el.prepend(favicon);
			}
    });

    // if (addedFavicons) {
    //   console.log(`Google Favicons: Added ${addedFavicons} icons`);
		// }

    // clearTimeout(nextAddSearchFavicon);
    // nextAddSearchFavicon = setTimeout(addSearchFavicons, 1000);
  } catch (error) {
    // console.error(error);
  }
}



// events --------------------

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
		// clearTimeout(nextAddSearchFavicon);
	} else {
		addSearchFavicons();
	}
});




// start --------------------

init();



// utils --------------------

function getUrl(domain) {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${domain}&size=16`;
}
