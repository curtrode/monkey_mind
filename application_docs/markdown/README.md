# Markdown -> PDF workflow (Banff application)

This folder is the Word-free source for application documents.

## Files
- `proposal.md`: editable source text for the Banff proposal
- `cover_letter.md`: original cover letter draft
- `cover_letter_3-15-26.md`: current cover letter (voice-matched redraft)
- `portfolio-docs.css`: shared print styling aligned to the portfolio visual language
- `proposal-header.css`: extends base styles with "Curt Rode | March 2026" header
- `render_pdf.sh`: render script using `pandoc` + `weasyprint`
- `output/`: generated PDFs (gitignored)

## Render proposal PDF
```bash
application_docs/markdown/render_pdf.sh \
  application_docs/markdown/proposal.md \
  application_docs/markdown/output/Rode_Banff_Proposal_from_md.pdf \
  application_docs/markdown/proposal-header.css
```

## Render cover letter PDF
```bash
application_docs/markdown/render_pdf.sh \
  application_docs/markdown/cover_letter_3-15-26.md \
  application_docs/markdown/output/Rode_Banff_Cover_Letter_3-15-26.pdf
```

## Render a different markdown file
```bash
application_docs/markdown/render_pdf.sh /path/to/input.md /path/to/output.pdf
```

## Edit cycle
1. Edit `proposal.md` or `cover_letter_3-15-26.md`
2. Run `application_docs/markdown/render_pdf.sh`
3. Open the updated PDF in `output/`
