declare type SvgNames =
  | 'alarm'
  | 'alert-triangle'
  | 'alert'
  | 'align-bottom'
  | 'align-horizontal'
  | 'align-left'
  | 'align-right'
  | 'align-top'
  | 'align-vertical'
  | 'apps-add'
  | 'apps'
  | 'archive'
  | 'arrow-down'
  | 'arrow-left-down'
  | 'arrow-left-up'
  | 'arrow-left'
  | 'arrow-right-down'
  | 'arrow-right-up'
  | 'arrow-right'
  | 'arrow-up'
  | 'bag-alt'
  | 'bag'
  | 'bank'
  | 'basket'
  | 'bell-off'
  | 'bell'
  | 'bin-simple'
  | 'bin-x'
  | 'bin'
  | 'block'
  | 'book-open'
  | 'book'
  | 'bookmark'
  | 'box'
  | 'briefcase'
  | 'brush'
  | 'calendar-check'
  | 'calendar-x'
  | 'calendar'
  | 'camera-off'
  | 'camera'
  | 'card'
  | 'caret-down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'carousel'
  | 'cart'
  | 'cash'
  | 'catalog'
  | 'chart-pie'
  | 'chart'
  | 'chat'
  | 'check-circle'
  | 'check-star'
  | 'check-strong'
  | 'check'
  | 'checks'
  | 'circle-arrow-down'
  | 'circle-arrow-left-down'
  | 'circle-arrow-left-up'
  | 'circle-arrow-left'
  | 'circle-arrow-right-down'
  | 'circle-arrow-right-up'
  | 'circle-arrow-right'
  | 'circle-arrow-up'
  | 'clipboard-text'
  | 'clipboard'
  | 'clock'
  | 'close-strong'
  | 'close-circle'
  | 'close'
  | 'cloud-check'
  | 'cloud-download'
  | 'cloud-slash'
  | 'cloud-upload'
  | 'cloud'
  | 'coffee'
  | 'columns'
  | 'comment'
  | 'compass'
  | 'contacts'
  | 'copy'
  | 'crop'
  | 'crown'
  | 'cube'
  | 'cup'
  | 'cursor-simple'
  | 'cursor'
  | 'database'
  | 'desktop'
  | 'discount'
  | 'distribute-horizontal'
  | 'distribute-vetrical'
  | 'download-alt'
  | 'download'
  | 'drag-horizontal'
  | 'drag-vertical'
  | 'edit'
  | 'error-octagon'
  | 'external-link'
  | 'eye-slash'
  | 'eye'
  | 'eyedropper'
  | 'fast-backward'
  | 'fast-forward'
  | 'file-plus'
  | 'file-text'
  | 'file'
  | 'filter'
  | 'fire'
  | 'flag'
  | 'folder-plus'
  | 'folder'
  | 'forward'
  | 'fullscreen-exit'
  | 'fullscreen'
  | 'funnel'
  | 'gamepad'
  | 'gift'
  | 'globe-alt'
  | 'globe'
  | 'grid-four'
  | 'hat'
  | 'headphones-micro'
  | 'headphones'
  | 'heart'
  | 'history'
  | 'hourglass'
  | 'house-alt'
  | 'house'
  | 'hover'
  | 'image'
  | 'inbox'
  | 'info'
  | 'key'
  | 'laptop'
  | 'layers'
  | 'layout'
  | 'light-bulb'
  | 'lightning'
  | 'link-chain'
  | 'link'
  | 'list-add'
  | 'list'
  | 'location'
  | 'lock-open'
  | 'lock'
  | 'loudspeaker'
  | 'mail-open'
  | 'mail'
  | 'map-pin-alt'
  | 'map-pin'
  | 'map'
  | 'maximize'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic-off'
  | 'mic'
  | 'minimize'
  | 'minus-circle'
  | 'minus'
  | 'money'
  | 'mood-happy'
  | 'mood-neutral'
  | 'mood-sad'
  | 'moon'
  | 'more-horizontal'
  | 'more-vertical'
  | 'mouse'
  | 'music-note'
  | 'music-notes'
  | 'my-location'
  | 'navigation'
  | 'palette'
  | 'paper-clip'
  | 'pause'
  | 'pen'
  | 'pencil'
  | 'percent'
  | 'phone-incoming'
  | 'phone-missed'
  | 'phone-outgoing'
  | 'phone'
  | 'play'
  | 'playlist-video'
  | 'playlist'
  | 'plus-box'
  | 'plus-circle'
  | 'plus'
  | 'presentation'
  | 'printer'
  | 'push-pin'
  | 'puzzle'
  | 'qr-code'
  | 'question'
  | 'receipt'
  | 'refresh'
  | 'repeat'
  | 'reply'
  | 'route'
  | 'rows'
  | 'safe'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'server'
  | 'settings-alt'
  | 'settings'
  | 'share-network'
  | 'share'
  | 'shield-check'
  | 'shield-slash'
  | 'shield'
  | 'shuffle'
  | 'sidebar'
  | 'sign-in'
  | 'sign-out'
  | 'skip-next'
  | 'skip-previous'
  | 'sliders-alt'
  | 'sliders'
  | 'small-caret-down'
  | 'small-caret-left'
  | 'small-caret-right'
  | 'small-caret-up'
  | 'smartphone'
  | 'snooze'
  | 'sort-down'
  | 'sort-up'
  | 'sound-low'
  | 'sound-off'
  | 'sound-x'
  | 'sound'
  | 'star-fill'
  | 'star-half'
  | 'star'
  | 'stop'
  | 'subtitles'
  | 'sun'
  | 'sync'
  | 'tablet'
  | 'tag'
  | 'text-align-center'
  | 'text-align-left'
  | 'text-align-right'
  | 'thin-arrow-down'
  | 'thin-arrow-left-down'
  | 'thin-arrow-left-up'
  | 'thin-arrow-left'
  | 'thin-arrow-right-down'
  | 'thin-arrow-right-up'
  | 'thin-arrow-right'
  | 'thin-arrow-up'
  | 'thumb-down'
  | 'thumb-up'
  | 'ticket'
  | 'timer'
  | 'trending-down'
  | 'trending-up'
  | 'unfold-less'
  | 'unfold-more'
  | 'upload-alt'
  | 'upload'
  | 'user-add'
  | 'user-circle'
  | 'user'
  | 'users'
  | 'video-camera-off'
  | 'video-camera'
  | 'video'
  | 'wallet'
  | 'watch'
  | 'widgets'
  | 'wrench'
  | 'zoom-in'
  | 'zoom-out'
