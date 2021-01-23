import React from 'react'
import Button from "@material-ui/core/Button"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import * as colors from "@material-ui/core/colors";

interface OwnProps {
    title: string
    onClick: Function
}
type Props = OwnProps
export const SubmitButton : React.FC<Props> = props => {
    const theme = createMuiTheme({
        overrides: {
            MuiButton: {
                root: {
                    fontSize: "32px",
                    lineHeight: 1.5,
                    width: "20%",
                },
                containedPrimary: {
                    backgroundColor: colors.blue[800],
                }
            },
        }
    });
    return(
        // contained, outlined
        <ThemeProvider theme={theme}>
            <Button variant="outlined" color="primary" onClick={() => props.onClick()}>{props.title}
            </Button>
        </ThemeProvider>
    )
}
