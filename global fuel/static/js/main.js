/**
 * Global Fuel Analytics - Client-Side Interactive JavaScript
 * Handles Tableau embed controls, responsiveness, sharing, and UI utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initTableauControls();
  initAutoDismissAlerts();
});

/**
 * Initialize controls for Tableau Public dashboards & stories
 */
function initTableauControls() {
  const tableauContainer = document.getElementById('tableauWrapper');
  const fullscreenBtn = document.getElementById('btnFullscreen');
  const reloadBtn = document.getElementById('btnReloadViz');
  const copyLinkBtn = document.getElementById('btnCopyLink');

  // Fullscreen toggle for Tableau container
  if (fullscreenBtn && tableauContainer) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (!document.fullscreenElement) {
        if (tableauContainer.requestFullscreen) {
          tableauContainer.requestFullscreen();
        } else if (tableauContainer.webkitRequestFullscreen) {
          tableauContainer.webkitRequestFullscreen();
        } else if (tableauContainer.msRequestFullscreen) {
          tableauContainer.msRequestFullscreen();
        }
        fullscreenBtn.innerHTML = '<i class="bi bi-fullscreen-exit"></i> Exit Fullscreen';
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        fullscreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i> Fullscreen';
      }
    });

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && fullscreenBtn) {
        fullscreenBtn.innerHTML = '<i class="bi bi-arrows-fullscreen"></i> Fullscreen';
      }
    });
  }

  // Reload visualization iframe / web component
  if (reloadBtn) {
    reloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const iframe = document.querySelector('.tableau-viewport iframe');
      const tableauViz = document.querySelector('tableau-viz');

      if (iframe) {
        const currentSrc = iframe.src;
        iframe.src = '';
        setTimeout(() => {
          iframe.src = currentSrc;
        }, 150);
      } else if (tableauViz) {
        const currentSrc = tableauViz.getAttribute('src');
        tableauViz.setAttribute('src', '');
        setTimeout(() => {
          tableauViz.setAttribute('src', currentSrc);
        }, 150);
      }

      // Visual feedback on reload button
      const origText = reloadBtn.innerHTML;
      reloadBtn.innerHTML = '<i class="bi bi-check2"></i> Reloaded';
      setTimeout(() => {
        reloadBtn.innerHTML = origText;
      }, 1500);
    });
  }

  // Copy share link to clipboard
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const shareUrl = copyLinkBtn.getAttribute('data-url') || window.location.href;
      
      navigator.clipboard.writeText(shareUrl).then(() => {
        const origText = copyLinkBtn.innerHTML;
        copyLinkBtn.innerHTML = '<i class="bi bi-clipboard-check"></i> Copied!';
        copyLinkBtn.classList.add('btn-success');
        setTimeout(() => {
          copyLinkBtn.innerHTML = origText;
          copyLinkBtn.classList.remove('btn-success');
        }, 2000);
      }).catch(err => {
        console.warn('Clipboard write failed:', err);
      });
    });
  }
}

/**
 * Automatically dismiss alerts after 5 seconds
 */
function initAutoDismissAlerts() {
  const alerts = document.querySelectorAll('.alert-dismissible');
  alerts.forEach(alert => {
    setTimeout(() => {
      if (alert && alert.parentNode) {
        const bsAlert = bootstrap.Alert.getOrCreateInstance(alert);
        if (bsAlert) {
          bsAlert.close();
        }
      }
    }, 5000);
  });
}

