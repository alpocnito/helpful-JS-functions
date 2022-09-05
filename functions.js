function getByKey(data, key)
{
    for (let i = 0; i < data.length; i += 1)
    {
        if (data[i].key == key)
        {
            return data[i].value;
        }
            
    }
    return "POSION_VALUE";
}

function getFromData(data, name)
{
    for (let i = 0; i < data.length; i += 1)
    {
        if (data[i].dataKey.name == name)
            return data[i];
    }
    return data[0];
}
