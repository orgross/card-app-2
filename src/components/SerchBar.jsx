import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { useSearchParams } from 'react-router-dom';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function SearchBar() {
    const { isDark } = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = ({ target }) => setSearchParams({ q: target.value });

    return (
        <Box display={'inline-flex'}>
            <FormControl variant='standard'>
                <OutlinedInput
                    sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                    placeholder='Search'
                    size='small'
                    value={searchParams.get('q') ?? ""}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position='end'>
                            <IconButton edge='end'>
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Box>
    );
}
