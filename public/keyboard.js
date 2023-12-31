
!(function () {
  function a(e) {
    return Math.floor((p.width - e) / e);
  }
  function i(e) {
    var t = 3 === e.length ? e.charAt(2) : e.charAt(1);
    return (
      (e =
        (e = [
          "A",
          "A#",
          "B",
          "C",
          "C#",
          "D",
          "D#",
          "E",
          "F",
          "F#",
          "G",
          "G#",
        ].indexOf(e.slice(0, -1))) < 3
          ? e + 12 + 12 * (t - 1) + 1
          : e + 12 * (t - 1) + 1),
      440 * Math.pow(2, (e - 49) / 12)
    );
  }
  function r(e) {
    null !== e && (e.style.backgroundColor = p.activeColour);
  }
  function l(e) {
    null !== e &&
      ("white" === e.getAttribute("data-note-type")
        ? (e.style.backgroundColor = p.whiteKeyColour)
        : (e.style.backgroundColor = p.blackKeyColour));
  }
  function n(e) {
    for (var t = 0, o = e.length, n = [], i = 0; i < o; i++)
      if (p.startNote.charAt(0) === e[i]) {
        t = i;
        break;
      }
    for (i = 0; i < o; i++) n[i] = o - 1 < i + t ? e[i + t - o] : e[i + t];
    return n;
  }
  function t(e) {
    var t, o;
    (e.el.style.display = "inline-block"),
      (e.el.style["-webkit-user-select"] = "none"),
      "white" === e.colour
        ? (((o = e).el.style.backgroundColor = p.whiteKeyColour),
          (o.el.style.border = "1px solid " + p.borderColour),
          (o.el.style.borderRight = 0),
          (o.el.style.height = p.height + "px"),
          (o.el.style.width = o.width + "px"),
          (o.el.style.borderRadius = "0 0 5px 5px"),
          (o.el.style.position = "relative"),
          (o.el.style.zIndex = "1"),
          (o.el.style.boxSizing = "content-box"),
          o.noteNumber === w() - 1 &&
            (o.el.style.border = "1px solid " + p.borderColour))
        : ((t = e),
          (o = a(w())),
          (e = Math.floor(o / 2)),
          (t.el.style.backgroundColor = p.blackKeyColour),
          (t.el.style.border = "1px solid " + p.borderColour),
          (t.el.style.position = "absolute"),
          (t.el.style.left =
            Math.floor((o + 1) * (t.noteNumber + 1) - e / 2) + "px"),
          (t.el.style.width = e + "px"),
          (t.el.style.height = p.height / 1.5 + "px"),
          (t.el.style.borderRadius = "0 0 3px 3px"),
          (t.el.style.zIndex = "2"),
          (t.el.style.boxSizing = "content-box"));
  }
  function s(e) {
    function t(e) {
      (e.style.cursor = "default"),
        (e.style.fontSize = "0px"),
        (e.style.height = p.height + "px"),
        (e.style.padding = 0),
        (e.style.position = "relative"),
        (e.style.listStyle = "none"),
        (e.style.margin = p.margin),
        (e.style["-webkit-user-select"] = "none"),
        (e.style.boxSizing = "content-box");
    }
    t(e.container),
      t(e.el),
      (e.el.style.width =
        e.totalWhiteKeys * (a(e.totalWhiteKeys) + 1) + 2 + "px");
  }
  function o(e, t) {
    "li" == e.tagName.toLowerCase() && ((k = !0), r(e), t(e.title, i(e.title)));
  }
  function u(e, t) {
    "li" == e.tagName.toLowerCase() && ((k = !1), l(e), t(e.title, i(e.title)));
  }
  function c(e, t) {
    k && (l(e), t(e.title, i(e.title)));
  }
  function y(e) {
    return (
      (e.el = document.createElement("li")),
      (e.el.id = e.id),
      (e.el.title = e.id),
      e.el.setAttribute("data-note-type", e.colour),
      t(e),
      e
    );
  }
  function d(e) {
    return b[e]
      .replace("l", parseInt(p.keyOctave, 10) + p.keyPressOffset)
      .replace(
        "u",
        (parseInt(p.keyOctave, 10) + p.keyPressOffset + 1).toString()
      );
  }
  function h(e) {
    return e.ctrlKey || e.metaKey || e.altKey;
  }
  function e(e) {
    (this.version = "0.10.0"),
      (this.keyDown = function () {}),
      (this.keyUp = function () {}),
      (this.setKeyOctave = function (e) {}),
      (this.getKeyOctave = function () {}),
      (this.keyOctaveUp = function () {}),
      (this.keyOctaveDown = function () {}),
      (this.getKeyMap = function () {}),
      (this.setKeyMap = function (e) {}),
      function (e) {
        (user_settings = e || {}),
          (p = {
            id: user_settings.id || "keyboard",
            octaves: user_settings.octaves || 3,
            width: user_settings.width,
            height: user_settings.height,
            margin: user_settings.margin || 0,
            startNote: user_settings.startNote || "A3",
            whiteKeyColour: user_settings.whiteKeyColour || "#fff",
            blackKeyColour: user_settings.blackKeyColour || "#000",
            activeColour: user_settings.activeColour || "yellow",
            borderColour: user_settings.borderColour || "#000",
            keyboardLayout: user_settings.keyboardLayout || "en",
            musicalTyping: !1 !== user_settings.musicalTyping,
          }),
          (e = document.getElementById(p.id)),
          void 0 === p.width && (p.width = e.offsetWidth),
          void 0 === p.height && (p.height = e.offsetHeight),
          (p.startOctave = parseInt(p.startNote.charAt(1), 10)),
          (p.keyOctave = user_settings.keyOctave || p.startOctave),
          (this.setKeyOctave = function (e) {
            return (p.keyOctave = e), p.keyOctave;
          }),
          (this.getKeyOctave = function () {
            return p.keyOctave;
          }),
          (this.keyOctaveUp = function () {
            return p.keyOctave++, p.keyOctave;
          }),
          (this.keyOctaveDown = function () {
            return p.keyOctave--, p.keyOctave;
          }),
          (this.getKeyMap = function () {
            return b;
          }),
          (this.setKeyMap = function (e) {
            return (b = e);
          }),
          C(),
          m.call(this, e);
      }.call(this, e);
  }
  var f = this,
    g = "undefined" == typeof global ? f : f.window,
    p = {},
    k = !1,
    v = {},
    b = {
      65: "Cl",
      87: "C#l",
      83: "Dl",
      69: "D#l",
      68: "El",
      70: "Fl",
      84: "F#l",
      71: "Gl",
      89: "G#l",
      90: "G#l",
      72: "Al",
      85: "A#l",
      74: "Bl",
      75: "Cu",
      79: "C#u",
      76: "Du",
      80: "D#u",
      59: "Eu",
      186: "Eu",
      222: "Fu",
      221: "F#u",
      220: "Gu",
    },
    w = function () {
      return 7 * p.octaves;
    },
    C = function () {
      var t,
        e = {
          container: document.getElementById(p.id),
          el: document.createElement("ul"),
          whiteNotes: n(["C", "D", "E", "F", "G", "A", "B"]),
          notesWithSharps: n(["C", "D", "F", "G", "A"]),
        },
        o = function () {
          for (
            var o, n = this, i = [], r = 0, l = p.startOctave, s = w(), u = 0;
            u < s;
            u++
          )
            u % this.whiteNotes.length == 0 && (r = 0),
              (bizarre_note_counter = this.whiteNotes[r]),
              "C" === bizarre_note_counter && 0 !== u && l++,
              (o = y({
                colour: "white",
                octave: l,
                width: a(s),
                id: this.whiteNotes[r] + l,
                noteNumber: u,
              })),
              i.push(o.el),
              u !== s - 1 &&
                this.notesWithSharps.forEach(function (e, t) {
                  e === n.whiteNotes[r] &&
                    ((o = y({
                      colour: "black",
                      octave: l,
                      width: a(s) / 2,
                      id: n.whiteNotes[r] + "#" + l,
                      noteNumber: u,
                    })),
                    i.push(o.el));
                }),
              r++;
          return { keys: i, totalWhiteKeys: s };
        }.call(e);
      return (
        (e.keys = o.keys),
        (e.totalWhiteKeys = o.totalWhiteKeys),
        (o = e.whiteNotes),
        (p.keyPressOffset = "C" === o[0] ? 0 : 1),
        s(e),
        (t = e).keys.forEach(function (e) {
          t.el.appendChild(e);
        }),
        e.container.querySelector("ul")
          ? e.container.replaceChild(e.el, e.container.querySelector("ul"))
          : e.container.appendChild(e.el),
        e
      );
    },
    m = function (e) {
      var n = this;
      p.musicalTyping &&
        (g.addEventListener("keydown", function (e) {
          var t, o;
          h(e) ||
            ((t = e),
            (o = n.keyDown),
            t.keyCode in v ||
              ((v[t.keyCode] = !0),
              void 0 === b[t.keyCode] ||
                (o((t = d(t.keyCode)), i(t)),
                r(document.getElementById(t)),
                0)) ||
              e.preventDefault());
        }),
        g.addEventListener("keyup", function (e) {
          var t, o;
          h(e) ||
            ((t = e),
            (o = n.keyUp),
            delete v[t.keyCode],
            void 0 === b[t.keyCode] ||
              (o((t = d(t.keyCode)), i(t)), l(document.getElementById(t)), 0) ||
              e.preventDefault());
        })),
        e.addEventListener("mousedown", function (e) {
          o(e.target, n.keyDown);
        }),
        e.addEventListener("mouseup", function (e) {
          u(e.target, n.keyUp);
        }),
        e.addEventListener("mouseover", function (e) {
          var t;
          (t = e.target), (e = n.keyDown), k && (r(t), e(t.title, i(t.title)));
        }),
        e.addEventListener("mouseout", function (e) {
          c(e.target, n.keyUp);
        }),
        "ontouchstart" in document.documentElement &&
          (e.addEventListener("touchstart", function (e) {
            o(e.target, n.keyDown);
          }),
          e.addEventListener("touchend", function (e) {
            u(e.target, n.keyUp);
          }),
          e.addEventListener("touchleave", function (e) {
            c(e.target, n.keyUp);
          }),
          e.addEventListener("touchcancel", function (e) {
            c(e.target, n.keyUp);
          }));
    };
  "undefined" != typeof exports
    ? ("undefined" != typeof module &&
        module.exports &&
        (exports = module.exports = e),
      (exports.QwertyHancock = e))
    : (f.QwertyHancock = e);
})();
