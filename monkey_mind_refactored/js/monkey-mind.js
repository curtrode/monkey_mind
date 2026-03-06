/*
 * Stochastic Texts reimplementation
 * copyright (c) 2014 Nick Montfort <nickm@nickm.com>
 * based on a 1959 program (Stochastische Texte) by Theo Lutz
 * the text is a translation of Lutz's German text by Helen MacCormack
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

'use strict';

const MonkeyMind = {
  init(config) {
    const {
      subjects,
      predicates,
      conjunctions,
      operators,
      interval,
      maxVisible = 8,
      endearments = null,
      interjections = null,
      id = null,
    } = config;

    let t = 0;

    const randRange = (maximum) =>
      Math.floor(Math.random() * (maximum + 1));

    const choose = (array) =>
      array[randRange(array.length - 1)];

    const phrase = () => {
      let text = choose(operators);
      if (endearments) {
        text += choose(endearments);
      }
      text += ' ' + choose(subjects);
      if (text === 'A EYE') {
        text = 'AN EYE';
      }
      return text + ' ';
    };

    const litany = () => {
      const main = document.getElementById('main');
      if (maxVisible > t) {
        t += 1;
      } else {
        main.removeChild(main.firstChild);
      }
      const last = document.createElement('div');
      let text = phrase() + choose(predicates);
      if (interjections) {
        text += choose(interjections);
      }
      text += choose(conjunctions);
      text += phrase() + choose(predicates) + ' ';
      last.innerHTML = text;
      main.appendChild(last);

      if (window.parent !== window && id) {
        window.parent.postMessage({ type: 'monkeyMindText', text: text, source: id }, '*');
      }
    };

    litany();
    setInterval(litany, interval);
  }
};
