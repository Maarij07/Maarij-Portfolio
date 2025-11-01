$ErrorActionPreference = 'Stop'

# Exclude common vendor/build directories
$excludeDirPattern = '([\\/])(node_modules|\.git|\.next|dist|build|out|\.turbo)([\\/])'

# Skip common binary extensions (avoid corrupting binaries)
$binaryExt = @(
    '.png','.jpg','.jpeg','.gif','.webp','.ico','.pdf','.zip','.gz','.tar','.rar','.7z',
    '.exe','.dll','.pdb','.mp3','.mp4','.avi','.mov','.woff','.woff2','.ttf','.eot','.otf',
    '.wasm','.class','.jar','.psd','.ai','.svg'
)

# Replacement
$pattern = 'Maarij Bukhari'
$replacement = 'Maarij Bukhari'

# Gather candidate files
$files = Get-ChildItem -Recurse -File -Force | Where-Object {
    $_.FullName -notmatch $excludeDirPattern -and -not ($binaryExt -contains $_.Extension.ToLower())
}

# Filter to files containing the exact (case-sensitive) match
$targets = foreach ($f in $files) {
    if (Select-String -Path $f.FullName -Pattern $pattern -SimpleMatch -CaseSensitive -Quiet) { $f.FullName }
}

# Perform replacements
$changed = @()
foreach ($p in $targets) {
    $content = Get-Content -LiteralPath $p -Raw
    $new = $content -replace [regex]::Escape($pattern), $replacement
    if ($new -ne $content) {
        [System.IO.File]::WriteAllText($p, $new, (New-Object System.Text.UTF8Encoding($false)))
        $changed += $p
    }
}

Write-Output ('Changed files: ' + $changed.Count)
$changed | ForEach-Object { $_ }
