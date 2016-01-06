// Array.from(document.querySelectorAll('nav a'))
//   .forEach(function (anchor) {
//     anchor.addEventListener('click', function (event) {
//       event.preventDefault()
//       // console.dir(anchor)
//       history.pushState(null, '', anchor.attributes.href.value)
//       Array.from(document.querySelectorAll('section'))
//         .forEach(function (section) {
//           section.style.display = 'none'
//         })
//       switch (anchor.attributes.href.value) {
//         case '/about':
//           document.title = 'About Us'
//           document.querySelector('#about')
//             .style.display = 'block'
//           break;
//         case '/shop':
//           document.title = 'SG50 Shop'
//           document.querySelector('#products')
//             .style.display = 'block'
//           break;
//         case '/':
//           document.title = 'Homepage'
//           document.querySelector('#landing')
//             .style.display = 'block'
//           break;
//       }
//     })
//   })

// 6 jan
// function Router (routes) {
//   this.routes = routes
//
//   window.addEventListener('popstate', function (event) {
//     console.log(event)
//     this.route()
//   }.bind(this))
//
//   document.addEventListener('click', function (event) {
//     if (event.target.tagName === 'A') {
//       if (event.target.href.startsWith(window.location.origin)) {
//         event.preventDefault()
//         console.log(event)
//         window.history.pushState(null, '', event.target.attributes.href.value)
//         this.route()
//       }
//     }
//   }.bind(this))
//
//   document.addEventListener('change', function (event) {
//     // console.dir(event.target.value)
//     // console.log(window.location.pathname)
//     if (window.location.pathname === '/products') {
//       window.history.replaceState(null, '', window.location.pathname + '?' + document.querySelector('#color').value + '+' + document.querySelector('#size').value)
//     }
//     if (window.location.pathname === '/about') {
//         // console.log(window.location.pathname)
//         // console.log(document.querySelector('#group').value)
//       window.history.replaceState(null, '', window.location.pathname + '?' + document.querySelector('#group').value)
//     }
//     this.route()
//   }.bind(this))
//
//   this.route()
// }
//
// Router.prototype.route = function () {
//   Array.from(document.querySelectorAll('section'))
//     .forEach(function (section) {
//       section.style.display = 'none'
//     })
//
//   var route = this.routes.find(function (obj) {
//       // console.log(obj.route)
//     const myRegex = obj.route
//     return myRegex.test(window.location.pathname)
//   })
//
//   if (route) {
//     console.log(route.title)
//     document.title = route.title
//     document.querySelector(route.element).style.display = 'block'
//     // console.log(document.querySelector(handler.element))
//     console.log(window.location.pathname)
//   }
  // 6 jan
  //
  // Object.keys(this.routes).forEach(function (key) {
  // this.routes.forEach(function (key) {
  //   console.log(window.location.pathname)
  //   console.log(window.location.pathname.match(key.route))
  //   console.log(key.route.test(window.location.pathname))
  //   console.log(key.route)
  //
  //   if (key.route.test(window.location.pathname)) {
  //     // var handler = this.routes[key]
  //     document.title = key.title
  //     document.querySelector(key.element)
  //       .style.display = 'block'
  //   }
  // })

  // switch (window.location.pathname) {
  //   case '/about':
  //     document.title = 'About Us'
  //     document.querySelector('#about')
  //       .style.display = 'block'
  //     break
  //   case '/shop':
  //     document.title = 'SG50 Shop'
  //     document.querySelector('#products')
  //       .style.display = 'block'
  //     break
  //   case '/':
  //     document.title = 'Homepage'
  //     document.querySelector('#landing')
  //       .style.display = 'block'
  //     break
  //   default:
  //     document.querySelector('#error404').style.display = 'block'
  // }
// }

// class Router {
//   constructor (routes) {
//     this.mySecretRoutes = routes
//
//     window.addEventListener('popstate', event => {
//       console.log(event)
//       this.route()
//     })
//
//     document.addEventListener('click', event => {
//       if (event.target.tagName === 'A') {
//         if (event.target.href.startsWith(window.location.origin)) {
//           event.preventDefault()
//           console.log(event)
//           history.pushState(null, '', event.target.attributes.href.value)
//           this.route()
//         }
//       }
//     })
//   }
//
//   route () {
//     Array.from(document.querySelectorAll('section'))
//       .forEach(function (section) {
//         section.style.display = 'none'
//       })
//
//     switch (window.location.pathname) {
//       case '/about':
//         document.title = 'About Us'
//         document.querySelector('#about')
//           .style.display = 'block'
//         break
//       case '/shop':
//         document.title = 'SG50 Shop'
//         document.querySelector('#products')
//           .style.display = 'block'
//         break
//       case '/':
//         document.title = 'Homepage'
//         document.querySelector('#landing')
//           .style.display = 'block'
//         break
//       default:
//         document.querySelector('#error404').style.display = 'block'
//     }
//   }
// }
// 6 jan
// module.exports = Router
// 6 jan
export default class Router {
  constructor (routes) {
    this.routes = routes

    window.addEventListener('popstate', function (event) {
      this.route()
    }.bind(this))

    document.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        if (event.target.href.startsWith(window.location.origin)) {
          event.preventDefault()
          window.history.pushState(null, '', event.target.attributes.href.value)
          this.route()
        }
      }
    }.bind(this))

    this.route()
  }

  route () {
    var route = this.routes.find(function (route) {
      const pattern = route.route
      return pattern.test(window.location.pathname)
    })

    if (route) {
      route.view()
    }
  }
}
