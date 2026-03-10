# Monkey Mind
*Too many tabs open.*

An interactive electronic literature piece — two voices in stochastic dialogue, exploring relational anxiety and the weight of what lingers.

## Overview

Inspired by [Nick Montfort](http://nickm.com)'s [Memory Slam](https://nickm.com/memslam/) — a collection of stochastic text engines running classics like "Love Letters" (Strachey) and "House of Dust" (Knowles & Tenney) — *Monkey Mind* began as an apprentice's remix and grew into something more ambitious. Where those foundational works exist as poetic monologues, *Monkey Mind* aspires to create a cluttered dialogue that dramatizes the anxieties of intimacy. Two voices generate text simultaneously, each assembling phrases from relational subjects ("you are my," "I am not your," "we were our") and abstract ("silence," "dream," "darkness," "freedom") or pastoral ("horses," "meadow," "yellow bird") predicates. The voices run at different speeds, creating an overlapping texture that evokes two minds thinking past each other.

The title references the Buddhist concept of "monkey mind" — restless consciousness swinging from thought to thought. The subtitle, *Too many tabs open*, updates the metaphor.

## How It Works

The `MonkeyMind` module generates sentences by randomly combining:

- **Subjects**: Relationship phrases ("you are my", "I am not your", "we were our")
- **Predicates**: Abstract nouns ("silence", "dream", "darkness", "freedom") and pastoral imagery ("horses", "meadow", "yellow bird")
- **Conjunctions**: Connectors with parenthetical asides ("and", "but", "(please listen)")

Each voice has its own word pool and interval timing, creating an organic, overlapping conversation effect. The piece uses a terminal-style interface with text-to-speech narration in both synthetic machine and AI-generated human voices. Voices begin muted; the viewer chooses when to listen, which voices to activate, and how quickly each voice processes its anxieties.

## Roadmap

- **Real-time responsiveness**: The voices currently generate independently. The next phase will expand the dialogic features so that unmuted stochastic voices begin to respond to one another under certain conditions — echoing, mirroring, or inverting each other's words. The central question: is it even possible to carry the stochastic nature of the original into something truly dialogic, in real time?

- **Emotional arc**: AI-generated texts will traverse registers of nostalgia, tension, anger, defensiveness, and reconnection — without guaranteeing resolution.

- **Flexible gender identity**: The fixed "him" and "her" pairing will expand to support more combinations — him/him, her/they, they/they — exploring a wider range of relationship dynamics.

- **Richer language**: New sentence templates will introduce declarations, questions, negation contrasts, and direct address, expanding the grammar-based generation at the heart of this tradition.

## Project Structure

```
├── index.html              # Main application (combines both voices)
├── excerpt.html            # Work-in-progress excerpt (printable)
├── stochastic_thing2.html  # "Him" voice generator
├── stochastic_thing3.html  # "Her" voice generator
├── js/
│   └── monkey-mind.js      # Core stochastic text engine
├── css/
│   ├── base.css            # Shared styles
│   ├── him.css             # "Him" character styling
│   └── her.css             # "Her" character styling
└── archive/                # Earlier iterations and visual mockups
```

## Running the Piece

1. Open `index.html` in a modern browser
2. Click anywhere on the overlay to begin
3. (Optional) Enter an OpenAI API key for AI-generated voices

| Voice Mode | Setup | Quality |
|------------|-------|---------|
| Machine voices | None required | Synthetic, robotic |
| AI voices | OpenAI API key | Natural, expressive |

## Credits

- **Inspirations**: Christopher Strachey — *Love Letters* (1952); Alison Knowles & James Tenney — *A House of Dust* (1967)
- **Memory Slam**: Nick Montfort

## License

ISC License — see [LICENSE](LICENSE).
