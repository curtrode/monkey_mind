# Monkey Mind
*Too many tabs open.*

An electronic literature piece that stages a transition from rule-based stochastic text generation to large-language-model improvisation — and makes that transition the dramatic arc of the work.

**[Experience the duet](https://curtrode.github.io/monkey_mind/)** · **[Improvisation prototype](https://curtrode.github.io/monkey_mind/openAI-improv.html)**

## Overview

Inspired by [Nick Montfort](http://nickm.com)'s [Memory Slam](https://nickm.com/memslam/) — a collection of stochastic text engines running classics like "Love Letters" (Strachey) and "House of Dust" (Knowles & Tenney) — *Monkey Mind* began as an apprentice's remix and grew into something more ambitious. Two voices generate text simultaneously, each assembling phrases from relational subjects ("you are my," "I am not your," "we were our") and abstract ("silence," "dream," "darkness," "freedom") or pastoral ("horses," "meadow," "yellow bird") predicates. The voices run at different speeds, creating an overlapping texture that evokes two minds thinking past each other.

The central formal innovation is the transition from stochastic generation to LLM-driven improvisation. Think of a jazz standard: the stochastic engine plays the head; the LLM picks up the horn and solos over the changes. The piece stages this handoff in three phases — *echo* (LLM replicates the original grammar), *bend* (new words enter, fragments lengthen, intention emerges), and *drift* (free improvisation, finding language the stochastic engine could not say). The voice itself shifts: synthetic machine speech gives way to AI-generated narration as the transition unfolds.

The title references the Buddhist concept of "monkey mind" — restless consciousness swinging from thought to thought. The subtitle, *Too many tabs open*, updates the metaphor.

## How It Works

The `MonkeyMind` module generates sentences by randomly combining:

- **Subjects**: Relationship phrases ("you are my", "I am not your", "we were our")
- **Predicates**: Abstract nouns ("silence", "dream", "darkness", "freedom") and pastoral imagery ("horses", "meadow", "yellow bird")
- **Conjunctions**: Connectors with parenthetical asides ("and", "but", "(please listen)")

Each voice has its own word pool and interval timing, creating an organic, overlapping conversation effect. The piece uses a terminal-style interface with text-to-speech narration in both synthetic machine and AI-generated voices. Voices begin muted; the viewer chooses when to listen, which voices to activate, and how quickly each voice processes its anxieties.

## Development

The improvisation prototype (`openAI-improv.html`) demonstrates the single-voice transition from stochastic generation through the three drift phases. The next stage of development — proposed for a residency at the Banff Centre for Arts and Creativity (September 2026) — expands the monologue into a multi-model dialogue: each voice driven by a different LLM, each with genuinely different tendencies and ways of interpreting the same emotional territory. The author's role becomes that of a director, shaping each model-voice through system prompts that play with or against its natural grain.

## Project Structure

```
├── index.html              # Main piece — two-voice stochastic duet with TTS
├── openAI-improv.html      # Improvisation prototype (single voice, OpenAI)
├── portfolio.html          # Portfolio — work-in-progress excerpt (8-page printable)
├── monkey_mind_session_transcript.pdf  # Improv session transcript
├── js/
│   └── monkey-mind.js      # Core stochastic text engine
├── css/
│   ├── base.css            # Shared styles
│   ├── him.css             # "Him" character styling
│   └── her.css             # "Her" character styling
├── next_phase_planning/    # Multi-model development notes
└── archive/                # Earlier iterations and visual mockups
```

## Running the Piece

**Duet** (`index.html`): Open in a modern browser, click the overlay to begin. Optionally enter an OpenAI API key for AI-generated voices.

**Improvisation prototype** (`openAI-improv.html`): Requires an OpenAI API key. The piece runs the stochastic engine, then transitions through echo, bend, and drift phases using GPT-4o.

## Credits

- **Inspirations**: Christopher Strachey — *Love Letters* (1952); Alison Knowles & James Tenney — *A House of Dust* (1967)
- **Memory Slam**: Nick Montfort

## License

ISC License — see [LICENSE](LICENSE).
