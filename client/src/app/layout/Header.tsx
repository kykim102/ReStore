import { AppBar, Switch, Toolbar, Typography } from '@mui/material'

interface Props {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header ({ setDarkMode }: Props) {
  return (
    <AppBar position='static' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>RE-STORE</Typography>
        <Switch onChange={e => setDarkMode(e.target.checked)} />
      </Toolbar>
    </AppBar>
  )
}
