import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarSpecs from './CarSpecs';
import ImageGallery from './ImageGallery';

const CarDetail = () => {
  const { id } = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const data = {
            "carResponseDTO": {
                "id": 1,
                "brand": "Toyota",
                "model": "Corolla",
                "color": "Red",
                "passengers": 5,
                "ac": true,
                "pricePerDay": 50,
                "createdAt": "2025-02-11T18:45:15.461Z",
                "updatedAt": "2025-02-11T18:45:15.461Z",
                "img": [
                    {
                        "id": 1,
                        "src": "jaja",
                        "description": "Vista frontal",
                        "title": "Toyota",
                        "carPicture": "front",
                        "date": "2025-02-11T18:45:16.000Z",
                        "createdAt": "2025-02-11T18:45:15.581Z",
                        "updatedAt": "2025-02-11T18:45:15.581Z"
                    },
                    {
                        "id": 2,
                        "src": "toyota-side.jpg",
                        "description": "Vista lateral",
                        "title": "Toyota",
                        "carPicture": "side",
                        "date": "2025-02-11T18:45:16.000Z",
                        "createdAt": "2025-02-11T18:45:15.581Z",
                        "updatedAt": "2025-02-11T18:45:15.581Z"
                    }
                ]
            },
            "picturesResponseDTO": [
                {
                    "id": 1,
                    "src": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRgYGBgYGBsYGBsaGhgaGBsfGRsYHSggGBolIB0aIjEiJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGi0dHSUtLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xABREAABAgQDBAYGBQgFCwQDAAABAhEAAyExBBJBBVFhcQYTIoGRoQcyscHR8BQjQlLhJDNicnOCsvElQ2OSwhU1RFNUg5Oio7PTFjTD0hdFZP/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIxEBAQACAwEAAQQDAAAAAAAAAAECERIhMUFhAxNRcSKR8P/aAAwDAQACEQMRAD8AxN9YFwWhaVhixJBZgzuLtYNWEVySA+kdNsjKXTvt8YKpRIvTygJZAuH74OudRsoEAkSYXQuz2GhsfCEM0CF3gHKU5lAO2ZQAA4mLEZqUpEs0mJZGVIBDj1WUNTR3+8N0QmExSJaAfWmEq1ZhYd71iQwM1RT1xloUcz2sAGD7kvqxexsIze2MjdalAsUsp3FKs1C4L6vSAE09cCpKQc6RQlgygDR3vvjp+IWnKoq7TjTskJJ1ftAHdS+5oRlkqnAqVmJWmtvtCrcTAjeUhxCHSP8AzbjN4kq8lJ+EctbKAHPzMH6QJfZ2L4yFfxCMtMOxavqkUequ474v3obLzpo/sx7Yok2U8tKau6maL56HA2Jmj+zA8CI6XxmM1SmnfE90DLY7D/tD/AqIrDgF93IGJjoSGx0j9p7UKMKkpb0iJ/pPF3fOGY65Et3/ABiHKk5CnPVQd8t20YmqrDSJj0iKbamKOgWk/wDTQYrs6cci3SKtzA+fZCeLfWgellTIwDinVzH3/wBXGeSV6UZ7s71uxjQfSykmXs+n2JnslRQ0luyA2YCgO/fCeLWhdHwk7ExdDl7dNW62Q/zxiirkS2QsEhTnOQ7Mzhgz/Ji8dGpf9BYxL/fD3/rJEVGaQEEooXCiAa9n1u7VucZt1UWT0a4X8uC0klPVrFmLlKTVrEM26Lx6RkfkEz9U+wxSfRvO/LVKbKChRYCnq34eGpi+ekQfkE39U+wxn6s8YV1p7Qet/D2EQ3xU0lR3CkKrmgGgDuRaBnTQ57KWf5eOyQ6wKMyl6PlguJm1Ce88bfCDgKEsrDCj2ENJuIJykgEkO5A3ke6J9W+aOet7IJ0fuqIPMnOmnP3PCctfYBYG9NLtAS5z0YUB0HC7CLXNyDW937oHKA360d19WbkWAsPKsIJxh4DgAOP4RlS6nKjUfLRdJC/yNNvVA8xFNlz6kVBGrn3Ra8Cr8lRTSv8AeESt4NGI3R0BMNS28x0YaYj1c0uSopQlrtmJIfsBTEuN1KCGmPnoqE53NyrK7bqD2XiQ2rtR/q5SgUliSQ6ibMC1BQW4boZYXZylDMUqrw+N60aLPyxOvTKSjhXxjpiNSCBprEt1oShSCGy0o1Dx132vQQzxm0ApISnNarkMN4AHHXlGlltRzQEKBG+ntgkVsETJ2gnqwEUAshyauXqwp434xDPAg1iVLNpMkzC61AJoHy5QzOwb2mFpSEGYCk2Ug76uHrqOPOI4TAXe5fz3w62RiMqmuCpLbgXZ23s8NM2NnmziFfO+HvSH/NmLb/Z1fxwymhz874lMVhuuwU+SFoSqZJUhJWrKMxVStaRhWE41RTLlkXzH2RffQ2XxMzjLfzEMsT6PcQUJT1+DcO/1x/8ApFk9H3R9WDnlU2fhykoyuiYVMzGrpDCN2zSSMjWpk0pXXc0TnQc/l2GO+Yf4FRML9GuIIA+lYIf71f8A4of9HOhU3D4mTNXicKoIU5SiYsqLpKaBUsDV7wthIgvSMW2riXLDOk/9JEVSYl8xelfJvjGp9NOhCsXjJ0+Xi8IlEzKRmmKCg0tKS4CCLjfEEr0bTQkg43A/8Vf/AI+EWWCT9KYHUbPJJHYmWD1aVxjNpQrzKq8o2Ppn0c+mScIhGKwyFSErChMWoPmCGIypNOyTXhFXHo2WwBx2Cb9ov/xxmVdHnRoj/IWN5L/7kiKFLIDBiQ7mt0mkazsTo4JWzsTg1YvDZpoUEzM56tyqWWql3ATVhqIrcr0cKH/7DBsXB+sWKEVHqQ3E0Q9GmU44EqP5qaBVwwT7qecaP09H9HTeCD/CYq/RTop9GxYX9Kw0zsTEhEtSiqo0dIDCLR08T/R879mr+ExPsNPP4lKXMypDqKiwGvjBsUkpUXHjEtPmLLFDAFKAohg/Vi7731EJ43KtKD2XTQ9odoaPWn846bTYpX9UR+j7ojlp7KOX+IxYMMmWZKkEJJKWBeruKvuZ4jJmEoGKKOA607ya1+awi2glFpQf9L2wnKUHUoWy+cLTJLIyEpBr9oNd/WdoRlyWCg6Kg/bSd3GgjVZgmHNQOfshFACSdaQtJlnMDmTq/bTx3GARIpVSH/WT7XjOlKLHaOh+Bi97LlPhJdbqZv3xFKepqnk4MXXo7MeTITr1wB/vAxmrivGLWy1DiYCHWKwqM6nFQWvupARz20wmZNkiqJalZQHV9nMTXkBpvNYYzsctRJKlVZw50LgchCk6UwygFRoXewIGgNK+0Ql9EUbJJHL3bo6JNFJmMKk5QGcglvAc+cGTs+YoFRYDWoHewhJM5KbDmTfjCuImKIJFEafZzBxprA/oymUJEABBs0KYfKVMokDheK0SXLI0PhBREtPwB6oqzIJCmASoksGBozG4rwPdFrllNwR8vE2Sn8rCFSHAHOj98dh6KSABRaXsdd/jFs2XsZM1CSzDssk/aZL6KLvc8iN8KYjYAQkKCKgpPMgl7nUl2Gg4RnnN6c5V7Wmvf74S6V4dKtn4kkdqXKzpOqTnTUHTUQ7nC/P3wn0hrs7GcZB/iTBpj8+Z9TLDqzFRdRJt7YufowwqVzloWAvMgO/aB7ad8UbFn6pHM+yL16IlPiUj9AP/AHkRu+MqPhpyshOYlQVqSdIluhylfTcM+Y/WalxVKt8QC1FiB94+2JzoYsnHYcblh7UofjFoU6aS+oxapcpkpyyVMAAHVKQom2pJhHpGopxa5QYI+qGVgzKloJ9vnD30ioH+UFfs5H/ZRDTpZ/76ZT/U/wDZlRCrH6T0lEnBFDpKhMSSkkOEiSA7XaKZj8YoLSHV6o+0d5i++lGW8jZ+lZgf/gxQNqyPrLj1R74zGvi9dHUhexcWqhUOsUCbggyavoYz+dNUFEZ1G32ix5VjQOio/oTHPoJv/wAPwigola+/4xWVm9Gc1Rx6XJPYm3Jb1Y03p0of5Pn8ZZ8WMZv6NlNj5YDMUzOfqKjSeniH2fP/AGaj4AmM29xZ4w2ZiVNlzEJ/CrVgkliSCNfWbQVatNLtC6MC7KNQzs/F476GklyWezCp5RrcSJbDSuwkWUygTUAHhyr8iInEKKCCxZiK1498TGzlgSwEguNXYUU1Xp/OIPGzcv3Xc9ocyCzRMb3Wsp1HTe0nvhJCUpBAD9lRfmix73hXDklIbeY6RdTXaZc7kqvo1L3jdrE8R2FT2hpWC5eL0h4JJzAkAWgsvZqyWAL8A/8AC8Nt+iTQcyvEHwi/dF5gEvDmlJqHP7wiq4KSErC5mUpvlLlzo4AOukWjZMwEoNgZ2YNYVJ8IlMWn4nCOtRvUx0OJjlSv1le0wMcdq83yx6wfjYv+9uHKHEvEhIISk53clrAaJDmkIycHOWWyLIepIo7feN/GJBOwphcKWAkAkFnci4GRw7AltwfWOnTF0j5qUzSVAZeVqBtN55QrLkElCULGYiyleq2hNh3H3QeZsk/YUGDBVzlL3NBxpwhRGzSrN9Y4dywJJNWzBrUHDtUJhs3+SMjDpU3WKbNYuk67tBzgUykjMerJTZyoJJD8DUQC9msSQoUuMhod2U/jeFpeGUCBlFDWnaIs5L0tbjDabO9obQSt+zLT+oMoIqdGcAk1iKCwzEk7szO2nIw4xmDUQ6QdXq5fUZqO24CEzs8hQSxCiGqN5ar8DcgQmiDp2jMUEArJTLGVGZxlt6pBB0vekPlbfnqbNMzCgcgGlmGbeL61MRaMCRQhTneGDPevvg6cKSxZ+0Ktx9tRThDUG0KLkwO2x+QYsf8A86/aIb4nGSpZPWTEIb7ykp9pgmJ2vh5uFxMqXOQta5K0JCDnJUSKdmI2yPGp+pR+t7ovHoh/92kaZPeiIPEbAJlpC5+HkkElpyihW62Unyiw9BVYbBz0zJuPwxDZWR1yqunUygNN8avjEZ1ODKV+srXjE10NLY3DH+0APnEhj9hYSWtSZm0ZYU5NMPPXQ1oQGI4iHnRzZuDE+XNTtGWoSlZ1PInIDC7qUGHfFppHekYkY4n+zw//AGUQl0kw8xeOmZEKUPqiSA4pIlkubCgia6UYSRisR1srH4RsktLTFTZRdEsJPrSm03wTbPRifiMSqbI6qchXVsZeIlK9SUhB7IXmNUnQ6RG9Jn0jp/J8AWcAzRdrolse4gHuik7V2VNUpC0y1qCkBmQq5JpbiPGLd6RMWFSMLKCViZLMzOJktctsyUAMZgANjZ4o8vBraiFlxcAqHjaJqzsnfS+7BwCpWyMcklJUZcxRALt6nZPGnnGbFcw8o0norKKdlbQCkkdmZQ8RL3xQ1pZgGA3C9IkqZTSw+jiWfp8o/or/AIFRp3TlP9H4j9mv+FUZp6Oyfp8qzMv+BUaR0zW+z8R+zmexUS+k8YsjMyK6A0BPJ610guDBKqOLWGa24Xd91nh9hpXYlkmhSm4pQAN7PGE0SiEoYmtafN40WdlsJmCA4AcmjEhwo7qXiM2lLS5cZmLdnjXUcIlpIzJWVKBqtg+uYnXvhlKSCVAhJcipDty3HS8J7W7rjIjUZWZTpQKHUtAypssFklTBKtwcZS+hakG2rICAQk5qO7NXWjndEbhC6jYdmZ5oMdL8c5PU3JxyCFIyIDgtmUSXY8L7rVgq9pqWD2Qw1BZoh8KjtpqL8/BoUkukExiumE7Se0sEEypc0uoLozsQWerpsWNX0MWHowR+TtQdYjjviHw0/Nh1SylSmO8ABjmFwW8NTEv0dd5KRT6xAa7do+Mat6Z01uavtK/WV7TAQ2xs9pigN5jo4NM0lyFZSkeoaEZQau7uQe18YTVsMM2UgO5yi+lW1NHa7RGp21M0p7YTndJFC6gTwFYzJl8cUqdlJVQKU5IfuDC774FGxwC4UQ5u4F2JtUAsA4bhFcX0pmfZ8290InpHiSKLYcB8Y1wzq8auc/ZalJJUpTEBPZISAA7UdgKmImevCy3SZwGhY5noBXIDW57zEUNi7QxKRM6ubMToSX8AS/lBkdCMeWAw6n4lKQO9RAjc/Tv2rxjp23ZYcI6xVGcsOd3NYaTNvzDZI19btGxF2GnhpCmI6K4uWrKqQomtQyk9kEntAtYG92o8QqidY3MZFmMSeFTiZudSQco9dVEoF6KUpkpuaPATpRd5mKlubspaz4oSR5w86YE/SRh5f5qWJaJKBZlISrNxUsnMVGpeHGJ6OyUYYTzPlqosEJJKkrFEJoWBUquViQkFRaJtrUQ5l4cGs+YTqUyQfNU1J8ocIOBbtKxSjwTLT7VmJTYnRBeJl/VZCXRmK5iJYdSSsBOcgns5bAxZujfotnGZ9fLCUA39cEcFS5wbwi7+H5UlKtnAVTjD+9KH+EwqjG4AeqMaP95L+Eeh9k9DcFJQE/R8OptTLCj3lZUT4w8XsLD/AGZUscpaB7BGeSMEwEmRPYSMSoLLDq5pRmO4USnN+6SYXx3RlYFlj72QpUKb0EZj5xr20+jEqcMq5UpadAUjyo47ogcR0XVJQpUqZmloBJlLUVgBIJZC/WQeCsw4C8blYULZnRjOzTK7iEA/xX74ezeg2KLlCesIuOsZTadkmvjEwMPQL6skFKV5FdlYCg4IIPmCU0NXBie6N7WyKLK6xBDMuikEHU3i2/wz/ahpkY2QeqTiSCamSohTDjLmKynueGW1cLNWgmZhUKVpMlJa335YC0gfq5GjaNp4bC4kfXykk6ElldygQYiDhJmHJOGkhaKVCk5z4LdTch3xnku7GP7OTMCF0UhBDLJKinK4HaCW7LkXYWhaXs1Kg6SH3pIIO6hqPExpE3bElRUqYpMibZXrJmcApyMwetore2FdsFcnPmHZmoLKoPtMSQdzgjnC1rHd+G/QbBLGPlnKGAXbQZVAHiKivGLx0j/zfP4yZv8AiigrnyQEvM7RNEKHafQgoF+LDmIfYrauJMgyHdKkqTlmulRSQQQmYef2gTxjH3bfFWtny0mUnNMALeqSBoIRws45G7L0DnTk343hricFMQMxSvJQZtxLsC1Aab2OnBuCd5+e+O3GVyuVnqewOMORST2qqZl5WLguC7aboi8SolSqqLmpNzTVqQiFHerx/GBzq+8rxhwhzIY0HKQL6QGz9mzFEEIUQQoOGdyk0Y61HjC3WHeecGExQrmLxrSch5fR2eklZQUpQColTCgBJYPWHkjopPIFUBJ7X3jVuDCGX0pZoZi24kmCHn5fhGbhtqfqaTErBplpo4zOo66lNPCJDo2n6yUP7VJ8Fq+EVOZNVv8AKLX0Om9vDE/efwVMEZyx1Gsc9tKxksFajvJgYnRsuUqqgSTUnMI6PO288YpGVKiwLAOCzMSBv4xXpMpU2YEoS6lUAFPbaLljcORKmAv+bVegs451A8Ip+GWqWc4cUIBsa7jpTWOuF6Yw8SiNjSpasuImkkByiQAtXEFSmSk/3ounRLamBlglGGyAKI6yclRsAe1MSCEcnij4naS5zIlhMqWm9WJJZytRqon53xJbIkzJXak45KVm6alJ4EF83cCY2tb5sfaGGnoHaQToXCqcFa+UNdrNKU2VLaOWflSsefNszp6ZudYEsqFDKdKTvIY3NCdeUWHYXpEnIR1GKT9Il/ZJYrHeWccXfnE12mumydSiZJmpAoQQoMC+8MLg1EZJ072CmbMUrDy0p6sBJSgMDlcEgD+dDejTMv0n4eVIIlSlJUaZW95JDePKM/2httc6aerzoSwYJURXerxMWElONq4Nc2QicyhNkAS5gIKVKlp/NzA929VWoZJtCEnCTMUgLM9SyHBSQVFHIE2NC+usNk7TnJP51VP0ioeBcHvhfA7W6qZ1iEhJPrBIISR+qS3GhEJFaB0MxsrCJX1uEl4lSjLKApSULTkQEdkTk5VEs7pLxbMX07GWuAnpA0AAYcCrKg9xjNU9KsOoMoFJ3lJH8JML4XbUv+rxIT3rT7hF4ys7q3D0i4WuaRik1uUA+BTMIiUw/T3CAgZsRVqhPZrxFPOkVSRtKcbrlTB+kZZ8yxiQkYyYf9HQrjLUn2OYnFDrbe1jiAfy7DFJtKE4oQP1yEvNP61NyRFXGAnSyVS8bgZRYjs4gBCgQxSpOQApIJ9t4sUzEfekEfrIB9jRWemYmTZSZciSkgl1sgZgzZWBNNaitIurFlladh9oYGbhpSFYqQFIQlIWmYglKgkBWUmig4qLFuUVLHIyrK5SkKUCxyEFKm1DG3mLHQxVOhuy8VIK1TUASWJKTlKiQKFIctx3+y3YfDJQAMi0kXPVip1PZOpeEmkyLytpqP2lJfRQp5iOn7XTLIJnplk1uCDzAtCa5EtVFV3ZkK8nERu1eimZJXJXNSq/YmK/hUW9kNRDnG7ewc5OXETZajoolRA5Ae6K7MXh5K80rGhVHCUypqWvTO5Hi7RHYbBYxUzqxOXeyxM9re+JlOwpySc82TMpRJTUnjR/AxLjK3jncfEVtREqfUqdRuyFEksNUiu5mhHZ+JxGH0mzpQukyVFPcSXSPKHGCwpmzVS5qBKUFJAHbS4JIdJKw4/dix470eYiW/50s/qrUbbgQkq7ni9EVnaXSWUtBSMIVB3uQx3unXjWGGy8AuegrTNwqSSWlzJiZaxXUqyjvBiTxfR0oPaMwfrApPgoK8TEbiNmTU2Dg6kJPsZ4THXhc+XqSl9HMahJP0LrR/ZLRPcb05Ss+yG82YhPZnYWZKVuUhafFwfdDbZxxKVZZboOgKyh+QWWJ5RYVbe2hKGSdLXl3swbi6eqV+8kxe2ekBLRIUp8wQnUsVN4Lbx8IUxezAKylCY6gAAWJdmNaXLM70h5O2phplZmGCtM0nLImDi0tRlK/wCGDDROz0rI+izwFP8AmcSBImHglTmVMffmSeENnGHI6JYzSSVEBylJSVAORZ61BtfRxWISehSVFKkqSoXSoFJHMGoiwYbpDiMLM6qanIxcy52cFrOlRAKbUNU8IuEvamCxyMk0JKmolRGYO4dCxccQe6HJm4soXFl6MCuG/WPnMXC+1OiC85GFBmivYdImJ5uQFDRxroNVtlbIxEoyguStJSSSCly4WpVAl3oRaJnZpr9OXbVjsyZ/tM7Swlt/BHQgrpFK+5PNqiUprQMcHXTIek4X1XUguogKVWgS9geJ9hilT0lwh7U95+eEX+diROmznRlUqXLKeSFLcMW3k90UnFJAnK4AeYD+0xvCdMyaizbIwkhKk4JaEmbiJZK5lSZRKOtlJltTMQElRq5Xl+yXDASlYBa5UpSDi2easpC0y0uPqkhQIK1Uzk2DJvmiNmYwiVhMUFMuUcoLEjPJKSkKINBkMvwO+JvBITLmzdoyQien1xLVMJKZkyZUKZPaCO0buQEqoHY0V6S4ZJTLRNQmTNmpK5kkVEpQLJWmvYCx2shLgOLM1CmoZwUkFNCx3d0W7aJGKTNxkpZUsEzZ8tSxnQ/ZUWoJiHZlJFAWIFIq+LmZlqO8A+TR06sYlpurKfveRgZaTvpAQeWfCGl2E0gijCykai3zeEFJggCqAzRxEA0FCFQpLxaklwog73hFoCC6WHDdMsYignONykoUPNLw7/8AW2IJSpSZZbcFIfnlU0VMQpKOkEsXaX0+JpMkOHDsrQFyKpetr6w4xPS/DLHZViJKu5ST4KcRRCmCkQZ1F4lbflKocSsHeSsDvekR219uTpZHVzEKRRlJWFHkQDTwirZYUCcxCR3mFqzGJQbfxM1TKJmg/wBWSooH7oLd5eG69mz1F8iAdyTLTb9EEVh9sCQmbiJeHfLKJJmKHrFCElaz/dSWie6P4rD4lcxCtnSkSJcqbMUrrJxmJCJZUO2V9ovlFheM26aity9sYqQciyop+5NGYd2aw4iL90e9LE9LJK3/AEJpf+7MNv3ooXXLlgInIeWqySXFroP2VcvOGO0cCEEFJJlqqk68QoaKEXXSPQSukuFxSe3OEhdiieEMrXUVvdPjHYvoVhJ0sLkTgldzkWFoPdUDwEYrsHpElCDIxCetkt2QwKkcs108HpcQScMEpXYUqUN7KJBb2d8JL8Sz+Vz21sLESEFa5ajJFDNSklA/aIVWXzcp/SivYfFLlfmJy0fopJKf7h92aI5WPmSlEysbNrrLWpL6dpJWDv8AGIwTmSe2oG7FNCdWINPCNbZmPS4ydrKnHLMlyZx5AL8Dc8mhDHSZQoZapb6G3gpx4RWRjEqHaFeJL9xNR4w5l7XmAZc/WJ+6uvgq8U0mZe0lJT1RyTpItJmAsn9mQXlHihSb1Bhjj5WGSBMkKUgvWTMHbS+qJiQEzE6OwPA3hgtcuZYmWrd8IRXLnJp64NqO70Aa7xKsTMja00EZVF01ANxuKTu0IqODW0joJ04ViiZE9AM4JJSUMkLAozUCZjkasX0jG8X10hYTMlqQr1glQIodQ+hqPGNH9DuHE7EzZpJyplBISCzZ1jMXG7KBvIXHLPVx26SXHLVW+d0plIUU/SEUJolBUBwcOHFjU1eOh9M6G4UknqUlyS5UgGpe2Sgjo4O+sVL9KZVLx8qazAyUoduySFzCz6moLcYoOzlpRtCWVAFHWIJCg4KQoFjvp7I2/aWNCgUqUlvtBQCkqG4hmUwfcbViibd6PYGYQpJ6peipZIS9SOwoZQDfst3x1xy+OWUV7afTSeh5KsLgSlycv0dJSD6pICi2agqzwvJ6RzVhAWEEzVJZMpIkp6pFJlEN2ln6sK9bsK3iHWHxE6ccqVyROlOPzEtaynLRcsrBMxz2ikdoguAohQhDbOebtSSFoA6pOGCilLIAlpRNmkCmVLlXi0a8ZEXsA4PFz5kuYJsiXLxIK8wd+qWjKsA1VnUkHjupFHXvh9icXNSZyc/51TzAkulRzZ+/ta8N0M8SlgBrrG8eolcgUggmV3CConEfygqlOXMNmjoLAqFh+Sh7oJ9Ie4HzygcFMlA/WoWoaBKgnxoSe4iJ/CbRwAABkkfrJzeeYkw2IALTdjHOjf5fjF2kz9mK/rJKS6afR1CmYPU0s57oksPsrZs0shclXABCT4CYIrLN+rGih890D9H5eIjUP/QeEXUIX+6C3lNIhGZ6NMObLnJ7viDA3GZnDncfCCZKxpK/Rin7OIWOaX9gEMsd6PZspBWrGICEhyVgpAHeTE2u1IZ2gq4OV1NlXYszjfS3fC+FxuV+wkv99EuZ4Z0uO4xTRoiJTovgUTZyRMJEt1KmEXEqWkzZjccqSBxIhtiJoX2mSlhZMtKB/wAt4kejE9CeszqCBMlzZOZnCTMy1LWDOHqz2aJVWT/IeGkSJ+NkThMlTJS5coqcTJa5jSlomCwUErJ5JJFKw12Lik4ZONnKl9YodQhKHaWorJzlTVbsjsuHdnaH+ypP0PCz5a1SzMXMCkoUy0zZRQSCUpqoOBVO8sWhx0alyZktakYcoRMKJSipCV4cqzDKkKmAZd7hiCBWz6ymsXLDLlnfx/3X+kGOkMuZOYYPCkDsoT1cwklmIrNKQL13CEekWESCyE5Zc5AmoSKhCwSmYlPAEFqWKYlsEvBD6WmZgVFckKy5JpAWJasrKdylhlL1cAkCkRfSbaCZnUplyeqEsTGGZRPaKXBzJBuHdz6xjnPXWzpUESTBilt5hdaWUocYCkbQnLroYeyMI4cqCQOV+RIMFkpF4IvDm5BD6t7HgFxLk1eepx+jr8IUGDkED8oD6vLce6GSpQ3boDqBugF8RggA6Vy18AFA90JKxJCChmIKSLuLm5NNDBDJG4QZcsZTSze0D3wpCePxcyarPNWpa7ZlFzGn+gCYc+LSBcSTarArHvB7oypUad6AsShOIxCVKAUpCMoOrLL99RHPOf4ty23dbZLSQKpc8FU7nLwEOUKpv8PfWOjg6ISfsVC6kA1N78tNYi8d0Jw0x8yQPbpQHTd/OLU4oC4eztU1PzTWDrFCakM/Ajg0XdTTLdo+ilCqyp5lqahKSb6HtVHAvEdj+gu1ygoGPlqSXBGeYnMmxzMkuL0jYAA9Xc8/n5MdkBLN3/NGjUzqcYwKX6JseS/WSOYWs/4ILN9E2M/1sklrZvwjf0yQdL72vq1wLaRxlDv3sw3eyH7lOMedp3oqxwt1auSviB5QyX6ONoCvU/8AOn40j0kZKd4f2608vCCrwx0bSp8O/wAIvOnF5dn9Esal3w8yl2D+yGc7Y2IR60mYG/RMerDhXZ+09Gc2b2/PCG87ZyFesgMHuOHn+BrD9w4vJ65ShcEcxBGj1TitgyT60pJf9EF9KjTSvGIud0Hwah2sOm1aB92quWu6L+5E4vNsqYpJdJIPAkeyH8nb2KT6uJnD/eKI8CWjcMR6MsGok9UU1sDv4vyiMneiDDkUUtPe4/n3X3xecTjWZSOm2OT/AKQo8CAfc8GxXS1U4viMPh5p3stCvFCxWLvM9DzvlnWfT55RH4j0RTxVMwHu+fCLyn8px/CnTMfhVf6KtG/JP90yWr2wnMVhT6q56eCkIX/zJWn+GLHP9F+NTbIrkd9BDCf6P8en+oJ5Hv8AnkYu5/JpC9ZLBYKJG9m8dYU2SxzSy3aHZJs+j97Qeb0cxabyF/3TDY7OnoLmUsfumNbRfujCZeGwypuOS8lTfRZRUUzTML5igpLy5bFlFwHrzjcPicTjsdJT6suVMQJcqUMsqUkHMcibAMC6zUuH3Q0wu0JWISiViytJR2UrLlgbggm2tGt3Q7nbPyIWjBrQhClnOuatKZkxIIIACh+aHJ1EFwzRPmk+7dtMJwe0cQJoK19e5ABZUiZmKw1mMpXFn4RHdI5KpOJXJUoq6pQlgqDEpSXc1IJO/XcInMZtiSlEmbM+sxUqWJZIKurVkUTLK3AzAAigHay1oK0/EYsrUqbMUSpRJc3JNSTxhjFtJKUCtXz7IWOMWkMKpaxqG5F4YdddtddYmdhdIk4dBSrDyprk9pQ7Qe4cggjupGk0jkYkKp6p01B8bQ6xW0VLbrJqlZQAAolkgUYCyabhEvJ6XywS+HSQQzHJTkRL90Re1sfInqCsq0FmplbyQIgaCenfu98cJ6d8JpVLFirvSk+0QcTUce5Ev4Q2ujvZU6R1o65XYqfVKg+jgEFuReHP0HMslM6TNSqmULEtTH7qJmWo0AJsIiRPP3UD90fCHcjrNA3JKfeIqI2cgoUUG4JB5ikT3Rbo5i56ldTKmAlJyqYoSSFJIGckAWu8P9nbPmrIUUzDaraPq0aV0a2bMQE5ysDQF7X17vxjGV01O1o2VKmy5SETMVNWoCqjLDmrjQuwYO9WjokZUgsHP/K/m8BHF0SKlJfNXSznVrB9YBShxI3/ABJ3VhASgLBL7zUPw8BaCTCm/Zcb0PU6sBztEU7B4V3H54CmkDnD0bR7+bUs0MlKZRPfQOd1XdhCsw27RpqWGnvgFVTKe3SumtPwgTMJsKeL8AyriGwahckVqCN+4U5t5QMygoAWo2lGIs/lEDgKdhRwzjy0MEMwEaENfS2heE5alXYB7CzCjc2t8IBa33t4DmKVFBAOJiQCeXq0sDq/zUQgZ1DSu5nNABXjbXXgYKqwDCt6uzHQkdrTdHFdbg0DFgbk7w4MAq4qacHAFe/mI4104afBzCQmE1LixFaGul9PFxAsbhnvVyas/iHvAKJqKpJ5hqWbSE8wSHJZmcKFWru17zABXarvDhrHe5Aq1fGF7DQWb5EAVKUkv2dXbx3x2UMXc6fL84Anj7zdtx5u+6OfLpSl/n5zQAfRnN78iB5c4TGHIFvj492sFWsO2U0J0o1AG3jj+ELiZWoOu8aH5q3jAIqwxOgrw5Ny0vDOfspCmeUkg3dIZruSQWu7eekSDKUxqKaGorq48uPKD9SwvTc3z8iKKrjuheDnAhchLa5VEEbmym2vfpEDN9FGGL5Fz5egT1ia8e0gsO+NHRLrUu76HfSr+7wgVJOXi+taU4056PF5VNRlmI9Dsj/aJw3ZjLVUXskU5D4Qn/8Ah2S/59atdOD6t57o1kC+m97ed7wQSbvrVmGjd+7daLyqcYyaZ6H5X+uI/dffZu7xhmr0OLqfpCQz/ZULfzjZiinhYU05fIgJiHuN5041pxhzpxjH5foZ34ka/Z5fF4cn0NoPqzqvqCxGlqjzvGqLlC6gwJto+hPz4wYoGhu4vXvr4Q504xlsj0Pyg2adXcBR+ZbziUwnoqwqSkqdWlqHjQU0vF/Es18uRrSvLw4QKU1fk1GPy9Yc8jjFVk9AcGA/VWFKjx4d2+JBHRbCpIAlINwHHDgKl/dE1kVTTv3u3cINlPySH5gcYm6uoYp2XKQ7S0Cm5hfz5V9kOEoLFlChBAAKRxBoad1HhyXFSd71084KKVax427rRAmOPtPwjoWMw/dJ/ebyekdAIFOjluDfjz7oFSfGmlfH3wUzUa2tUW8qjvjuvdzWw0Pfu8oihXUCtGs38zujik6H579L6Ugqlg31cXIG+v4wYbwS53HTS/zakAGTe1qV1bi1YApAqz3q24aNAS5o0Ltu/l3wYb2ANv5d8AZIpYZgX3aeJvHMwp7dDueC9cwckNW9ODM8BMIagFqUdnfh5RQcJFyCeHH5pBcjEg2pR6PTR+6nwcEkM+Ug/jrekchWhHHTU3O/8BACsB3bf4290D4nTgONad4gUnUUOvwpfuhvNc38Galb3+fMHLAVYM27WnhA5bBnrrVvaTCBmgM5LPc0sH3M3OFOsu2lxbkxpAcoFquO4Hx9t9YNJXXQg7h+HF++Gy1mlVGgdqavc3Ye/lBgohmJ+7pXVvdAOgQNabmjipj3ct27+dYSBoKWAofM+yBCTucb3/DdAKIZ2oxHz7oOD8/PCEF5gb05kU1tbvjgS17HWtH4W/nECiVjfusPZwjlZm3jd8/NYSW5qVMBq/vGngbd4AM5JudwfcIoXzmzfPx4cYAkeG/u8YIqYzVa1DfwgvW1+B1cPS8AsVbxwtUP8+WsA5rR7Wa3EP398JS18WNfl4MX4+bufn2wBU5ndxxrWDBP6XlybSASpTnfyIHzxjlrUGYPvAZw19QW8dIIMEk1B/lw1ECkn58d9oIJhIaoLaA7n7jWArvV32N6MBx52gpRMxwWI1+am/wjs3H2chcQjlLuee9nO8ncd3sgClTXbflGtnsW84BwFUJHwHD3R0maWAIAOrF7vYkB+WkNShQNQsg0vamgNucHRmoSnUXLln+APlBDnrk6kd5/GOhsZTklyKmmZvdAQUcpuRSrVrvp7YKqTYijUpQ7qmAjogSAA/Dnbk7+bisFROSG7LC7ix0NLx0dAOUmxLsN5u9oSmqTQOQSRbeTybhyjo6KCTsQAOXAt5Nr8mFgT2qNxoCwfc/Hxjo6AIkKIy5mL+87mpTfpArk3Zw1GLEUra0dHQHTkUDhgWazvxu/4QUjQsQ5FUu5BY6/Ld8dHQBVoSGoAdTXTcBbeztvs0DJlm6i78wacqEecdHQCocAuAXHeHsNxg6FVsd7u7R0dAEmEjtcRxuff87oK7sL+FjZqchHR0AssaceevlCExTEtS2nhrz0jo6AXKFHVjbvZ6d0FQDvtdgxLXgI6ANLZi6bAvZydXbjACWFUY+LBgDoKGOjoBNTJLkB2fjetebQpLPZ3bqcvGOjoAsyeCO0aUB77ebQoZYId6G/lpHR0AC0cCLa7+HhAJlfZLOz2Nn58x8I6OgAALhwHc2s4rTzg6kM+lOJ5++OjoAq1Mqhchix0HPlBusYO3fw+RHR0B0pYKQa1AI5G3lAx0dAf//Z",
                    "description": "Vista frontal",
                    "title": "Toyota",
                    "carPicture": "front",
                    "date": "2025-02-11T18:45:16.000Z",
                    "createdAt": "2025-02-11T18:45:15.581Z",
                    "updatedAt": "2025-02-11T18:45:15.581Z"
                },
                {
                    "id": 2,
                    "src": "data:image/jpeg;base64,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",
                    "description": "Vista lateral",
                    "title": "Toyota",
                    "carPicture": "side",
                    "date": "2025-02-11T18:45:16.000Z",
                    "createdAt": "2025-02-11T18:45:15.581Z",
                    "updatedAt": "2025-02-11T18:45:15.581Z"
                }
            ]
        };
        // const data = await getCarDetail(id);
        setCarDetail(data);
      } catch (error) {
        console.error('Error fetching car detail:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCarDetail();
  }, [id]);

  if (loading) return <div className="text-center py-8">Cargando...</div>;
  if (!carDetail) return <div className="text-center py-8">Auto no encontrado</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ImageGallery images={carDetail.picturesResponseDTO} />
          <CarSpecs car={carDetail.carResponseDTO} />
        </div>
      </div>
    </div>
  );
};

export default CarDetail;