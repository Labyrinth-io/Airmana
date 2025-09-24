# Custom Fonts for Airmana

## Font Files Needed

Place your custom font files in this directory with the following names:

- `AirmanaCustom.woff2` (preferred format for modern browsers)
- `AirmanaCustom.woff` (fallback for older browsers)
- `AirmanaCustom-Bold.woff2` (bold weight, preferred format)
- `AirmanaCustom-Bold.woff` (bold weight, fallback)

## Converting Your Font

If your font file is in a different format (like .ttf, .otf), you can convert it to web-friendly formats:

1. **Online converters** (recommended):
   - https://convertio.co/font-converter/
   - https://cloudconvert.com/font-converter
   - https://www.fontsquirrel.com/tools/webfont-generator

2. **What to convert**:
   - Convert your font file to both WOFF2 and WOFF formats
   - If you have separate files for regular and bold weights, convert both
   - If you only have one file, you can use it for both regular and bold

## File Naming

Rename your converted files to match the expected names:
- Your regular font → `AirmanaCustom.woff2` and `AirmanaCustom.woff`
- Your bold font → `AirmanaCustom-Bold.woff2` and `AirmanaCustom-Bold.woff`

## After Adding Files

Once you've placed the font files in this directory, the custom font will automatically be applied to:
- The Airmana business name/logo
- All headings (h1, h2, h3, h4, h5, h6)

The font sizes and spacing will remain exactly the same - only the font family will change.