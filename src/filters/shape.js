module.exports = function (value) {

  var brandIconData = {
    twitter: "M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",
    github: "M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8",
    spotify: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.56-8-8-8zm3.68 11.56c-.16.24-.44.32-.68.16-1.88-1.16-4.24-1.4-7.04-.76-.28.08-.52-.12-.6-.36-.08-.28.12-.52.36-.6 3.04-.68 5.68-.4 7.76.88.28.12.32.44.2.68zm.96-2.2c-.2.28-.56.4-.84.2-2.16-1.32-5.44-1.72-7.96-.92-.32.08-.68-.08-.76-.4-.08-.32.08-.68.4-.76 2.92-.88 6.52-.44 9 1.08.24.12.36.52.16.8zm.08-2.24C10.16 5.6 5.88 5.44 3.44 6.2c-.4.12-.8-.12-.92-.48-.12-.4.12-.8.48-.92 2.84-.84 7.52-.68 10.48 1.08.36.2.48.68.28 1.04-.2.28-.68.4-1.04.2z",
    mail: "m 4.658682,5.2012829 -4.62347321,-3.5515991 0,8.1750631 4.62347321,-4.623464 z m 11.137699,-5.20267555 -15.70686069,0 L 7.9366965,6.0265623 15.796381,-0.00139265 Z M 10.136208,6.0314319 7.9360056,7.7188478 5.7323549,6.0260145 0.05438598,11.704026 l 15.75438602,0 -5.672564,-5.6725941 z m 1.0744,-0.8240011 4.626888,4.6268728 0,-8.1754589 -4.626888,3.5485861 z"
  }

  return brandIconData[value];
};
